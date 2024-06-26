import demo_data from "../../server/demo_data.json"

export interface Schedule {
  eventSlotDto: {
    id: string
    startTime: string
    endTime: string
    availableSpots: number
    organizationId: string
    serviceId: string
    instructorId: string
    eventReference: string
    duration: number
    hasPaymentEnabled: boolean
    eventType: string
    totalSpots: number
    price: number
    repeatType: string
    startDate: string
    endEndDate: string
    timeslots: never[]
    repeatedDays: never[]
  }
  serviceDto: {
    id: string
    name: string
    description: string
    addressStreetNumber: null
    addressStreetName: string
    addressCity: string
    addressCountry: string
    featuredImage: string
    currency: null
    images: string[]
    isActive: boolean
    organizationId: string
    rating: null
    tags: never[]
  }
  instructorDto: {
    organizationId: string
    rating: null
    bio: string
    services: never[]
    certificates: null
    languages: null
    specialties: string[]
    categories: string[]
    title: string
    yearsOfExperience: number
    createdAt: null
    id: string
    password: null
    email: string
    resetPasswordToken: null
    firstName: string
    lastName: string
    isActivated: boolean
    archived: boolean
    isTrusted: boolean
    roles: null
    profilePicture: string
    contact: null
  }
}

class SchedulesApi {
  getSchedules(): Promise<{ schedules: Schedule[] }> {
    return Promise.resolve(demo_data)
  }
}

export const schedulesApi = new SchedulesApi()
