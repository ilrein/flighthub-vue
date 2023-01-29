export interface Podcast {
  id: string
  title: string
  description: string
  image: string
  heldOrders: number
  episodeDrops: number
  maxImpressions: number
}

export interface DropdownOption {
  label: string
  value: string
}