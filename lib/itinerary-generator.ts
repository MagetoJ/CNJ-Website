// lib/itinerary-generator.ts
import { jsPDF } from 'jspdf'
// 1. Import the standalone autoTable method directly to guarantee compatibility with Turbopack side-effects
import autoTable from 'jspdf-autotable'

interface QuizAnswers {
  destination?: string      // e.g., 'Masai Mara National Reserve, Serengeti National Park'
  duration?: string         // e.g., '8-11 Days (Classic Explorer)'
  luxuryLevel?: string      // e.g., 'Ultra-Luxury Lodges & Villas'
  travelersCount?: string   // e.g., 'Honeymoon Couple'
}

// Map coordinates mapping your Quiz destination landmarks to approximate placement vectors
const MAP_MARKERS_DB: Record<string, { x: number; y: number; label: string }> = {
  'nairobi': { x: 95, y: 110, label: 'Nairobi Hub' },
  'masai mara national reserve': { x: 75, y: 105, label: 'Masai Mara' },
  'amboseli national park': { x: 105, y: 122, label: 'Amboseli' },
  'lake nakuru national park': { x: 85, y: 95, label: 'Lake Nakuru' },
  'tsavo east & west': { x: 125, y: 135, label: 'Tsavo Ecosystem' },
  'diani beach (mombasa coast)': { x: 140, y: 148, label: 'Diani Beach' },
  'serengeti national park': { x: 65, y: 120, label: 'Serengeti' },
  'ngorongoro conservation area': { x: 78, y: 132, label: 'Ngorongoro Crater' },
  'tarangire national park': { x: 85, y: 145, label: 'Tarangire' },
  'lake manyara': { x: 80, y: 140, label: 'Lake Manyara' },
  'zanzibar archipelago': { x: 155, y: 175, label: 'Zanzibar Island' },
  'bwindi impenetrable forest (gorillas)': { x: 25, y: 92, label: 'Bwindi Forest' },
  'queen elizabeth national park': { x: 22, y: 80, label: 'Queen Elizabeth' },
  'murchison falls': { x: 30, y: 55, label: 'Murchison Falls' },
  'kibale national park': { x: 32, y: 75, label: 'Kibale Canopy' },
  'volcanoes national park': { x: 20, y: 102, label: 'Volcanoes NP' },
  'nyungwe forest': { x: 18, y: 115, label: 'Nyungwe Canopy' },
  'akagera national park': { x: 35, y: 105, label: 'Akagera' },
  'lake kivu': { x: 12, y: 108, label: 'Lake Kivu' }
}

// Converts standard images to Base64 strings safely
const convertImageToBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      } else {
        reject(new Error('Could not parse canvas context'))
      }
    }
    img.onerror = () => reject(new Error(`Failed to load image asset at ${url}`))
    img.src = url
  })
}

// Generates an inline high-contrast vector map matching selected parameters
const drawBespokeRouteMap = (selectedLocationsString: string): string => {
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 500
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  // Draw Premium Dark Textured Canvas Background Container
  ctx.fillStyle = '#222222'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw Grid lines mimicking specialized navigation coordinate charts
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
  ctx.lineWidth = 1
  for (let i = 0; i < canvas.width; i += 40) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke()
  }
  for (let j = 0; j < canvas.height; j += 40) {
    ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(canvas.width, j); ctx.stroke()
  }

  // Parse user choices and look up coordinates
  const activeMarkers: typeof MAP_MARKERS_DB[string][] = [{ x: 95, y: 110, label: 'Nairobi Hub' }] // Always include Nairobi as base transfer station
  const lowercasedQuery = selectedLocationsString.toLowerCase()

  Object.keys(MAP_MARKERS_DB).forEach((key) => {
    if (lowercasedQuery.includes(key)) {
      activeMarkers.push(MAP_MARKERS_DB[key])
    }
  })

  // Map coordinate multiplier vectors from mm positioning to fit our image viewport scale
  const scaleX = 4
  const scaleY = 2.4
  const offsetX = 50
  const offsetY = 40

  // 1. Render flight/transit path connecting nodes sequentially
  if (activeMarkers.length > 1) {
    ctx.strokeStyle = '#C19A6B' // Premium Gold line
    ctx.lineWidth = 3
    ctx.setLineDash([6, 6]) // Premium dashed journey visualization path
    ctx.beginPath()
    
    activeMarkers.forEach((marker, index) => {
      const calcX = marker.x * scaleX + offsetX
      const calcY = marker.y * scaleY + offsetY
      if (index === 0) ctx.moveTo(calcX, calcY)
      else ctx.lineTo(calcX, calcY)
    })
    ctx.stroke()
    ctx.setLineDash([]) // Reset stroke arrays
  }

  // 2. Render physical node marker pins and label alignments
  activeMarkers.forEach((marker, idx) => {
    const calcX = marker.x * scaleX + offsetX
    const calcY = marker.y * scaleY + offsetY

    // Outer anchor pulse ring animation layout
    ctx.fillStyle = idx === 0 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(193, 154, 107, 0.2)'
    ctx.beginPath(); ctx.arc(calcX, calcY, 14, 0, Math.PI * 2); ctx.fill()

    // Inner core pin anchor point
    ctx.fillStyle = idx === 0 ? '#FFFFFF' : '#C19A6B'
    ctx.beginPath(); ctx.arc(calcX, calcY, 5, 0, Math.PI * 2); ctx.fill()

    // Render typographic text tag descriptions next to nodes
    ctx.fillStyle = '#FFFFFF'
    ctx.font = 'bold 12px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText(marker.label, calcX + 18, calcY + 4)
  })

  // Stamp clean compass coordinate signature branding on card edge
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
  ctx.font = '10px monospace'
  ctx.fillText('CNJ GLOBAL NAVIGATION SYSTEM // EAST AFRICA TRACKS', 20, canvas.height - 20)

  return canvas.toDataURL('image/jpeg', 0.9)
}

export async function generateCustomSafariPDF(answers: QuizAnswers) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  
  const destination = answers.destination || 'East Africa'
  const duration = answers.duration || 'Custom Duration'
  const luxury = answers.luxuryLevel || 'Luxury Tier'
  const travelers = answers.travelersCount || 'Private Group'
  
  let heroAssetUrl = '/Enjoying an evening cruise searching for hippos in….jpeg'
  if (destination.toLowerCase().includes('mara')) {
    heroAssetUrl = '/A Safari and Beach Getaway in One Perfect Itinerary.jpeg'
  } else if (destination.toLowerCase().includes('serengeti')) {
    heroAssetUrl = '/📍Serengeti National Park on days 2 & 3 of the….jpeg'
  }

  try {
    // ==========================================
    // PAGE ONE: Premium Cover Sheet Layout
    // ==========================================
    doc.setFillColor(26, 26, 26) // #1A1A1A
    doc.rect(0, 0, 210, 297, 'F')

    const base64Hero = await convertImageToBase64(heroAssetUrl)
    doc.addImage(base64Hero, 'JPEG', 0, 0, 210, 130)

    doc.setDrawColor(193, 154, 107) // #C19A6B
    doc.setLineWidth(1.5)
    doc.line(0, 130, 210, 130)

    doc.setTextColor(255, 255, 255)
    doc.setFont('serif', 'bold')
    doc.setFontSize(36)
    doc.text('CNJ SAFARIS', 20, 160, { charSpace: 3 })

    doc.setFont('sans-serif', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(193, 154, 107)
    doc.text('CUSTOM BESPOKE EXPEDITION ITINERARY', 20, 168, { charSpace: 2 })

    doc.setFontSize(20)
    doc.setTextColor(255, 255, 255)
    doc.setFont('serif', 'bold')
    doc.text(`${duration}`, 20, 192)
    
    doc.setFontSize(14)
    doc.setTextColor(193, 154, 107)
    doc.text(`Expedition Focus: ${destination.length > 50 ? destination.slice(0, 47) + '...' : destination}`, 20, 202)

    doc.setFont('sans-serif', 'normal')
    doc.setFontSize(11)
    doc.setTextColor(161, 161, 170)
    doc.text(`Accommodation Standard: ${luxury}`, 20, 220)
    doc.text(`Traveler Configuration: ${travelers}`, 20, 228)
    doc.text(`Generation Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 20, 236)

    doc.setFillColor(34, 34, 34)
    doc.rect(20, 252, 170, 22, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(9)
    doc.text('This custom layout was programmatically generated based on your luxury criteria preferences.', 26, 261)
    doc.setTextColor(193, 154, 107)
    doc.text('Connect with your dedicated CNJ expert via WhatsApp to lock pricing and permits.', 26, 267)

    // ==========================================
    // PAGE TWO: Dynamic Visual Route Map Mapping
    // ==========================================
    doc.addPage()
    
    doc.setFillColor(26, 26, 26)
    doc.rect(0, 0, 210, 25, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFont('serif', 'bold')
    doc.setFontSize(14)
    doc.text('CNJ SAFARIS EXPLORER ROUTE MAP', 20, 16)
    
    doc.setDrawColor(193, 154, 107)
    doc.setLineWidth(1)
    doc.line(0, 25, 210, 25)

    doc.setTextColor(26, 26, 26)
    doc.setFont('serif', 'bold')
    doc.setFontSize(18)
    doc.text('Bespoke Expedition Transit Overview', 20, 42)
    
    doc.setFont('sans-serif', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text('Below is the customized flight and tracking route visualization connecting your target reserves:', 20, 48)

    // ⚡ INJECT MAP CANVAS DRAWING INTO DOCUMENT: Sized at 170mm x 106mm centered gracefully on the page
    const routeMapBase64 = drawBespokeRouteMap(destination)
    if (routeMapBase64) {
      doc.addImage(routeMapBase64, 'JPEG', 20, 56, 170, 106)
    }

    // Logistic Disclaimer box underneath the visual transit chart
    doc.setFillColor(250, 250, 250)
    doc.setDrawColor(230, 230, 230)
    doc.setLineWidth(0.3)
    doc.rect(20, 172, 170, 20, 'FD')
    
    doc.setTextColor(50, 50, 50)
    doc.setFont('sans-serif', 'bold')
    doc.setFontSize(9)
    doc.text('Transit Legend & Inclusions Note:', 25, 180)
    doc.setFont('sans-serif', 'normal')
    doc.setTextColor(110, 110, 110)
    doc.text('Dashed lines emphasize private internal air charter hops or 4x4 cruiser tracking configurations complete with guide escorts.', 25, 186)

    // ==========================================
    // PAGE THREE: Daily Schedule Timeline Grids
    // ==========================================
    doc.addPage()
    
    doc.setFillColor(26, 26, 26)
    doc.rect(0, 0, 210, 25, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFont('serif', 'bold')
    doc.setFontSize(14)
    doc.text('CNJ SAFARIS EXPLORER ROUTE PLAN', 20, 16)
    
    doc.setDrawColor(193, 154, 107)
    doc.setLineWidth(1)
    doc.line(0, 25, 210, 25)

    doc.setTextColor(26, 26, 26)
    doc.setFontSize(18)
    doc.text('Your Curated Daily Schedule Breakdown', 20, 42)

    const scheduleRows = [
      ['Day 1', 'Airport VIP Reception & Luxury Transfer to Nairobi Lounge Hoteliers.'],
      ['Day 2', `Morning Charter flight to chosen park ecosystems. First Sunset Game Drive.`],
      ['Day 3', 'Full Day Big Five wildlife tracking & private bush dinner sundowner.'],
      ['Day 4', 'Early Hot Air Balloon flight overhead followed by community weaver market visits.'],
    ]

    if (duration.includes('8') || duration.includes('11') || duration.includes('Classic')) {
      scheduleRows.push(
        ['Day 5', 'Inter-park transit migration crossing view observations.'],
        ['Day 6', 'Guided walking bush trackers safari alongside native rangers.'],
        ['Day 7', 'Relaxed luxury lounge spa rejuvenation & predator gorge flight patterns.'],
        ['Day 8', 'Final morning sunrise photography session followed by outbound airport transit international hookups.']
      )
    }

    autoTable(doc, {
      startY: 50,
      head: [['Timeline', 'Curated Operational Experience & Inclusions']],
      body: scheduleRows,
      margin: { left: 20, right: 20 },
      headStyles: { fillColor: [26, 26, 26], textColor: [255, 255, 255], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [250, 250, 250] },
      styles: { fontSize: 10, cellPadding: 5, lineColor: [230, 230, 230], lineWidth: 0.2 },
    })

    doc.save(`CNJ-Safari-Custom-Itinerary-${duration.replace(/\s+/g, '-')}.pdf`)

  } catch (error) {
    console.error('PDF Generation map pipeline failure:', error)
    alert('An operational issue occurred compiling image assets. Generating text-only download fallback.')
    
    const fallbackDoc = new jsPDF()
    fallbackDoc.text(`CNJ Safaris Itinerary - Focus: ${destination}`, 20, 20)
    fallbackDoc.text(`Duration: ${duration} (${luxury})`, 20, 30)
    fallbackDoc.save('CNJ-Bespoke-Safari-Itinerary.pdf')
  }
}