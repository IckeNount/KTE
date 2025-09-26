import {
  FiCheckCircle,
  FiFileText,
  FiGlobe,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiShield,
  FiUsers,
} from 'react-icons/fi'

export const agencyProcessSteps = [
  {
    id: 'consultation',
    title: 'Initial Consultation',
    description: 'We start with a personal conversation to understand your goals, experience, and preferences for working abroad.',
    icon: FiPhone,
    iconPosition: 'top' as const,
    delay: 0.1,
  },
  {
    id: 'assessment',
    title: 'Skills & Background Assessment', 
    description: 'Our team reviews your qualifications and matches you with the best opportunities that fit your profile.',
    icon: FiFileText,
    iconPosition: 'top' as const,
    delay: 0.2,
  },
  {
    id: 'matching',
    title: 'Opportunity Matching',
    description: 'We connect you with verified employers and schools that align with your career goals and personal preferences.',
    icon: FiUsers,
    iconPosition: 'top' as const,
    delay: 0.3,
  },
  {
    id: 'documentation',
    title: 'Legal Documentation',
    description: 'We handle all visa applications, work permits, and legal requirements to ensure your move is completely compliant.',
    icon: FiShield,
    iconPosition: 'top' as const,
    delay: 0.4,
  },
  {
    id: 'placement',
    title: 'Secure Placement',
    description: 'Once approved, we finalize your placement and ensure all contracts and agreements are in place before you travel.',
    icon: FiCheckCircle,
    iconPosition: 'top' as const,
    delay: 0.5,
  },
  {
    id: 'relocation',
    title: 'Relocation Support',
    description: 'We provide housing assistance, cultural orientation, and practical guidance to help you settle in your new country.',
    icon: FiMapPin,
    iconPosition: 'top' as const,
    delay: 0.6,
  },
  {
    id: 'integration',
    title: 'Cultural Integration',
    description: 'Our local team helps you adapt to your new environment with ongoing support and community connections.',
    icon: FiGlobe,
    iconPosition: 'top' as const,
    delay: 0.7,
  },
  {
    id: 'ongoing-care',
    title: 'Ongoing Care & Support',
    description: 'We stay with you throughout your journey, providing continuous support and assistance whenever you need it.',
    icon: FiHeart,
    iconPosition: 'top' as const,
    delay: 0.8,
  },
]

export const processConfig = {
  title: 'How We Make It Happen',
  description: 'Our proven 8-step process ensures your international journey is smooth, legal, and successful from start to finish.',
}