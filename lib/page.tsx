import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Educational Safaris & School Partnerships | CNJ Safaris',
  description: 'Specialized safari programs for schools and universities. Curriculum-aligned field trips, conservation certification, and service learning projects in East Africa.',
}

export default function EducationalSafarisPage() {
  const highlights = [
    {
      title: 'Curriculum Aligned',
      description: 'Living Geography and Biology immersion modules tailored for IGCSE, IB, and local curricula.',
      icon: '📚',
    },
    {
      title: 'Service Learning',
      description: 'Hands-on community projects like building predator-proof bomas and local school exchanges.',
      icon: '🤝',
    },
    {
      title: 'Junior Conservationist',
      description: 'Exclusive certification programs in partnership with leading wildlife conservancies.',
      icon: '🎓',
    },
    {
      title: 'Career Mentorship',
      description: 'Behind-the-scenes access to the tourism industry, shadowing professional guides and managers.',
      icon: '👔',
    },
    {
      title: 'Specialized Clubs',
      description: 'Customized masterclasses for photography, environmental, and eco-clubs.',
      icon: '📸',
    },
  ]

  const packages = [
    {
      id: 'edu-1',
      name: 'Living Geography',
      duration: '4 Days / 3 Nights',
      price: 'Tiered Pricing',
      highlights: [
        'Great Rift Valley formations',
        'Geothermal energy site visit',
        'Soil erosion workshops',
        'Sustainable land management',
      ],
    },
    {
      id: 'edu-2',
      name: 'Junior Conservationist',
      duration: '5 Days / 4 Nights',
      price: 'Group Rates',
      highlights: [
        'Ol Pejeta Ranger Experience',
        'Anti-poaching tech workshop',
        'K9 unit demonstration',
        'Official CNJ Certification',
      ],
    },
    {
      id: 'edu-3',
      name: 'Service Learning',
      duration: '7 Days / 6 Nights',
      price: 'Custom Quote',
      highlights: [
        'Community boma building',
        'School exchange program',
        'Water project assistance',
        'Cultural sensitivity training',
      ],
    },
    {
      id: 'edu-4',
      name: 'Career & Tourism Masterclass',
      duration: '3 Days / 2 Nights',
      price: 'Group Rates',
      highlights: [
        'Shadow a professional guide',
        'Sustainable tourism workshop',
        'Hospitality management basics',
        'Digital marketing in the wild',
      ],
    },
  ]

  return (
    <DestinationPage
      title="Educational Safaris"
      subtitle="Transforming the Wild into a Classroom"
      heroGradient="bg-gradient-to-br from-indigo-900 to-jungle-dark"
      bestTime="Term Dates / Academic Year"
      highlights={highlights}
      description="CNJ Safaris is redefining the traditional field trip. Our educational partnerships move beyond leisure, offering students deep dives into geography, biology, and community service. We also offer career mentorship for aspiring professionals and specialized masterclasses for photography and eco-clubs. With a focus on safety, logistics, and our 'Teacher Goes Free' model, we provide an enriching experience for international and local schools alike."
      packages={packages}
      metaDescription="Empower your students with CNJ Safaris' Educational Partnerships. Curriculum-aligned field trips and conservation programs in Kenya and Tanzania."
    />
  )
}