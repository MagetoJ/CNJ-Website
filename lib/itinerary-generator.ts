// lib/itinerary-generator.ts
import { jsPDF } from 'jspdf'
// 1. Import the standalone autoTable method directly to guarantee compatibility with Turbopack side-effects
import autoTable from 'jspdf-autotable'

interface QuizAnswers {
  destination?: string      // e.g., 'Maasai Mara', 'Serengeti'
  duration?: string         // e.g., '4 Days', '8 Days'
  luxuryLevel?: string      // e.g., 'Premium Luxury', 'Boutique Camp'
  travelersCount?: string   // e.g., 'Honeymoon Couple', 'Family'
}

// Helper utility to safely convert local website images to PDF-compatible Base64 strings
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

export async function generateCustomSafariPDF(answers: QuizAnswers) {
  // Create default A4 Portrait document configuration
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  // Set up dynamic layout template parameters based on quiz options
  const destination = answers.destination || 'East Africa'
  const duration = answers.duration || 'Custom Duration'
  const luxury = answers.luxuryLevel || 'Luxury Tier'
  
  // Choose contextually relevant hero image from your public asset folder matching the selection
  let heroAssetUrl = '/Enjoying an evening cruise searching for hippos in….jpeg'
  if (destination.toLowerCase().includes('mara')) {
    heroAssetUrl = '/A Safari and Beach Getaway in One Perfect Itinerary.jpeg'
  } else if (destination.toLowerCase().includes('serengeti')) {
    heroAssetUrl = '/📍Serengeti National Park on days 2 & 3 of the….jpeg'
  }

  try {
    // 1. PAGE ONE: Premium Cinematic Cover Page
    // Draw solid luxury background container fill
    doc.setFillColor(26, 26, 26) // #1A1A1A
    doc.rect(0, 0, 210, 297, 'F')

    // Fetch and draw the cinematic cover header image
    const base64Hero = await convertImageToBase64(heroAssetUrl)
    doc.addImage(base64Hero, 'JPEG', 0, 0, 210, 130)

    // Gold Accent Border Rule under the image
    doc.setDrawColor(193, 154, 107) // #C19A6B
    doc.setLineWidth(1.5)
    doc.line(0, 130, 210, 130)

    // Typography Layer: Luxury Branding Text
    doc.setTextColor(255, 255, 255)
    doc.setFont('serif', 'bold')
    doc.setFontSize(36)
    doc.text('CNJ SAFARIS', 20, 160, { charSpace: 3 })

    doc.setFont('sans-serif', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(193, 154, 107) // Gold
    doc.text('CUSTOM BESPOKE EXPEDITION ITINERARY', 20, 168, { charSpace: 2 })

    // Insert user's specialized parameters onto the title sheet
    doc.setFontSize(22)
    doc.setTextColor(255, 255, 255)
    doc.setFont('serif', 'bold')
    doc.text(`${duration} Private ${destination} Route`, 20, 195)

    // Metadata Details Sidebar Table Grid
    doc.setFont('sans-serif', 'normal')
    doc.setFontSize(11)
    doc.setTextColor(161, 161, 170) // Tailwind Zinc-400
    doc.text(`Accommodation Standard: ${luxury}`, 20, 215)
    doc.text(`Traveler Configuration: ${answers.travelersCount || 'Bespoke Private Group'}`, 20, 223)
    doc.text(`Generation Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 20, 231)

    // Call to Action Notice footer block
    doc.setFillColor(34, 34, 34) // #222222
    doc.rect(20, 250, 170, 22, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(9)
    doc.text('This custom layout was programmatically generated based on your luxury criteria preferences.', 26, 259)
    doc.setTextColor(193, 154, 107)
    doc.text('Connect with your dedicated CNJ expert via WhatsApp to lock pricing and permits.', 26, 265)


    // 2. PAGE TWO: Daily Core Schedule & Logistics
    doc.addPage()
    
    // Header Panel for Content Pages
    doc.setFillColor(26, 26, 26)
    doc.rect(0, 0, 210, 25, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFont('serif', 'bold')
    doc.setFontSize(14)
    doc.text('CNJ SAFARIS EXPLORER ROUTE PLAN', 20, 16)
    
    doc.setDrawColor(193, 154, 107)
    doc.setLineWidth(1)
    doc.line(0, 25, 210, 25)

    // Body Title
    doc.setTextColor(26, 26, 26) // High contrast text on white page
    doc.setFontSize(18)
    doc.text('Your Curated Daily Schedule Breakdown', 20, 42)

    // Build context-aware tabular summary rows dynamically based on user choices
    const scheduleRows = [
      ['Day 1', 'Airport VIP Reception & Luxury Transfer to Nairobi Lounge Hoteliers.'],
      ['Day 2', `Morning Charter flight to ${destination} ecosystem. First Sunset Game Drive.`],
      ['Day 3', 'Full Day Big Five wildlife tracking & private bush dinner sundowner.'],
      ['Day 4', 'Early Hot Air Balloon flight overhead followed by community weaver market visits.'],
    ]

    if (duration.includes('8')) {
      scheduleRows.push(
        ['Day 5', 'Inter-park transit migration crossing view observations.'],
        ['Day 6', 'Guided walking bush trackers safari alongside native rangers.'],
        ['Day 7', 'Relaxed luxury lounge spa rejuvenation & predator gorge flight patterns.'],
        ['Day 8', 'Final morning sunrise photography session followed by outbound airport transit international hookups.']
      )
    }

    // 2. Call the imported autoTable method explicitly, passing the 'doc' instance inside options
    autoTable(doc, {
      startY: 50,
      head: [['Timeline', 'Curated Operational Experience & Inclusions']],
      body: scheduleRows,
      margin: { left: 20, right: 20 },
      headStyles: {
        fillColor: [26, 26, 26],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [250, 250, 250],
      },
      styles: {
        fontSize: 10,
        cellPadding: 5,
        lineColor: [230, 230, 230],
        lineWidth: 0.2,
      },
    })

    // Save and pop the file down instantly into the explorer download directory tray
    doc.save(`CNJ-Safari-Custom-Itinerary-${destination.replace(/\s+/g, '-')}.pdf`)

  } catch (error) {
    console.error('PDF Generation pipeline failure:', error)
    alert('An operational issue occurred compiling image structures. Generating text-only download fallback.')
    
    // Resilient Fallback: compile text-only document if images fail cross-origin safety checks
    const fallbackDoc = new jsPDF()
    fallbackDoc.text(`CNJ Safaris Itinerary - Destination: ${destination}`, 20, 20)
    fallbackDoc.text(`Duration: ${duration} (${luxury})`, 20, 30)
    fallbackDoc.save('CNJ-Bespoke-Safari-Itinerary.pdf')
  }
}