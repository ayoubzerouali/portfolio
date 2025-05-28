import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, and checkout functionality.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Stripe API'],
    date: 'June 2023',
    client: 'RetailTech Inc.',
    role: 'Full-stack Developer',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    content: [
      'This e-commerce platform was built for RetailTech Inc. to modernize their online shopping experience. The client needed a robust solution with inventory management, customer accounts, and secure payment processing.',
      'I developed the entire application using Laravel on the backend with Vue.js for the frontend. The platform features real-time inventory updates, customer reviews, and a streamlined checkout process integrated with Stripe for payment processing.',
      'One of the main challenges was implementing a complex product variation system with multiple attributes (size, color, material) while maintaining good performance. I solved this by optimizing database queries and implementing efficient caching strategies.',
      'The application also includes an admin dashboard for managing products, orders, and customer data, with comprehensive analytics to track sales and inventory levels.'
    ],
    features: [
      'User authentication and account management',
      'Product catalog with categories, filters, and search',
      'Shopping cart and wishlist functionality',
      'Secure checkout with Stripe integration',
      'Order tracking and history',
      'Admin dashboard for inventory and order management',
      'Customer reviews and ratings',
      'Responsive design for mobile and desktop'
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Product listing page with filtering options'
      },
      {
        url: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Shopping cart and checkout process'
      }
    ]
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    description: 'A mobile application for tracking workouts, progress, and nutrition with personalized plans.',
    image: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Google Fit API'],
    date: 'February 2023',
    client: 'FitLife Studios',
    role: 'Mobile Developer',
    liveUrl: 'https://play.google.com',
    githubUrl: 'https://github.com',
    featured: true,
    content: [
      'The Fitness Tracker App is a comprehensive mobile solution for fitness enthusiasts to track their workouts, nutrition, and progress. The app was developed for FitLife Studios, a growing chain of fitness centers.',
      'Built with Flutter and Dart, the application provides a seamless experience across both iOS and Android platforms. Firebase was used for authentication and Cloud Firestore for data storage, ensuring real-time syncing of user data across devices.',
      'One of the key features is the integration with Google Fit API for automated activity tracking, complemented by manual logging options for workouts, measurements, and meal planning.',
      'The app includes visualizations of progress over time, personalized workout recommendations based on user goals, and social features to connect with friends and trainers.'
    ],
    features: [
      'User profile with fitness goals and stats',
      'Workout tracking with custom routines',
      'Progress visualization with charts and graphs',
      'Nutrition logging and meal planning',
      'Integration with wearable devices',
      'Social sharing and community challenges',
      'Personalized workout recommendations',
      'Offline mode with data synchronization'
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Workout tracking interface'
      },
      {
        url: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Progress tracking and statistics'
      }
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management Tool',
    description: 'A collaborative project management system with task tracking, team communication, and analytics.',
    image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Golang', 'Echo', 'HTMX', 'PostgreSQL', 'Docker'],
    date: 'October 2022',
    client: 'TechSolutions Corp.',
    role: 'Backend Developer',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    content: [
      'This project management tool was developed for TechSolutions Corp. to streamline their internal project workflows and improve team collaboration. The client needed a solution that would integrate with their existing systems while providing modern project management capabilities.',
      'I built the backend using Golang with the Echo framework, focusing on creating a high-performance API that could handle concurrent requests efficiently. The frontend was implemented using HTMX for dynamic content updates without full page reloads, providing a smooth user experience.',
      'PostgreSQL was chosen for the database to ensure data integrity and support complex queries for reporting and analytics. The entire application was containerized using Docker for easy deployment and scaling.',
      'Key challenges included designing a flexible permission system and implementing real-time notifications for team members. The solution includes comprehensive project tracking, resource allocation, time tracking, and reporting features.'
    ],
    features: [
      'Project planning with Gantt charts and Kanban boards',
      'Task management with dependencies and priorities',
      'Team collaboration with comments and file sharing',
      'Time tracking and resource allocation',
      'Custom workflows and approval processes',
      'Reporting and analytics dashboard',
      'Integration with third-party tools (Slack, GitHub)',
      'Role-based access control'
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Project dashboard with key metrics'
      },
      {
        url: 'https://images.pexels.com/photos/3182830/pexels-photo-3182830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Task management and team collaboration'
      }
    ]
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    description: 'A comprehensive inventory tracking system for retail businesses with barcode scanning and analytics.',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['PHP', 'Laravel', 'Alpine.js', 'MySQL', 'Chart.js'],
    date: 'April 2022',
    client: 'Global Retail Solutions',
    role: 'Full-stack Developer',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    content: [
      'The Inventory Management System was developed for Global Retail Solutions to help their clients efficiently track and manage inventory across multiple locations. The system includes barcode scanning, automated reordering, and comprehensive reporting features.',
      'Built using Laravel with Alpine.js for reactive UI components, the application provides real-time inventory updates and alerts for low stock levels. MySQL was used for data storage, with optimized queries for handling large inventory datasets.',
      'One of the major challenges was implementing a multi-location inventory system that could handle complex stock transfers between locations while maintaining accurate inventory counts. The solution includes a robust reconciliation process and audit trail for all inventory movements.',
      'The system also features integration with common POS systems, vendor management for streamlined ordering, and analytics dashboards for inventory optimization.'
    ],
    features: [
      'Real-time inventory tracking across multiple locations',
      'Barcode scanning for quick stock updates',
      'Automated purchase orders based on reorder points',
      'Vendor management and order tracking',
      'Integration with point-of-sale systems',
      'Comprehensive reporting and analytics',
      'Audit trails for inventory movements',
      'User roles and permissions'
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Inventory dashboard with stock levels'
      },
      {
        url: 'https://images.pexels.com/photos/7654118/pexels-photo-7654118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Barcode scanning and product management'
      }
    ]
  },
  {
    id: 'healthcare-scheduling',
    title: 'Healthcare Scheduling Platform',
    description: 'An appointment scheduling system for healthcare providers with patient management and reminders.',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Twilio API'],
    date: 'August 2021',
    client: 'MediCare Network',
    role: 'Frontend Developer',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    content: [
      'The Healthcare Scheduling Platform was developed for MediCare Network to streamline appointment booking and patient management across their network of clinics. The platform allows patients to book appointments online and receive automated reminders.',
      'Built with Next.js and TypeScript, the application provides a responsive and accessible interface for both patients and healthcare providers. MongoDB was used for data storage, offering flexibility for the various data models needed.',
      'A key feature is the integration with Twilio API for sending SMS appointment reminders to patients, significantly reducing no-shows. The platform also includes a provider dashboard for managing schedules, patient records, and appointment history.',
      'The scheduling algorithm takes into account provider availability, appointment types, and patient preferences to optimize the booking process. The system also supports recurring appointments and waitlist management.'
    ],
    features: [
      'Online appointment booking for patients',
      'Provider schedule management',
      'Automated SMS and email reminders',
      'Patient records and appointment history',
      'Waitlist management for cancellations',
      'Multi-location support for clinic networks',
      'Calendar synchronization with external systems',
      'Reporting for appointment analytics'
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Appointment booking interface'
      },
      {
        url: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Provider dashboard and schedule management'
      }
    ]
  },
  {
    id: 'travel-companion',
    title: 'Travel Companion App',
    description: 'A mobile travel companion with itinerary planning, local recommendations, and offline maps.',
    image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Google Maps API'],
    date: 'May 2021',
    client: 'Wanderlust Travel',
    role: 'Mobile Developer',
    liveUrl: 'https://play.google.com',
    githubUrl: 'https://github.com',
    featured: false,
    content: [
      'The Travel Companion App was created for Wanderlust Travel to enhance their customers\' travel experiences with comprehensive trip planning and local information. The app helps travelers organize itineraries, discover local attractions, and navigate unfamiliar locations.',
      'Developed with React Native and TypeScript, the application provides a consistent experience across iOS and Android devices. Redux was used for state management, ensuring predictable data flow throughout the app.',
      'One of the main challenges was implementing offline functionality for maps and itineraries, as travelers often have limited internet access. The solution includes sophisticated data synchronization when connectivity is restored.',
      'The app integrates with Google Maps API for navigation and location-based recommendations. Firebase provides backend services for user authentication, data storage, and real-time updates to travel information.'
    ],
    features: [
      'Comprehensive trip planning and itineraries',
      'Offline maps and navigation',
      'Local recommendations for attractions and dining',
      'Travel expense tracking',
      'Photo journaling with location tagging',
      'Weather forecasts for destinations',
      'Translation tools for international travel',
      'Emergency contacts and local safety information'
    ],
    screenshots: [
      {
        url: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Trip planning and itinerary management'
      },
      {
        url: 'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Local recommendations and offline maps'
      }
    ]
  }
];