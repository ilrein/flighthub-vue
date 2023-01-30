export interface Podcast {
  id: string
  title: string
  description: string
  image: string
  heldOrders: number
  episodeDrops: number
  maxImpressions: number
  weeks: ImpressionWeek[]
}

export interface ImpressionWeek {
  week: Date
  impressions: number
}

export interface DropdownOption {
  label: string
  value: string
}