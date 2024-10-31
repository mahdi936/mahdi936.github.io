export interface Root {
  price: number
  minOrderValue: number
  minSellOrderValue: number
  feeTable: FeeTable[]
  totalOrder30dayValues: number
  minDeposit: number
  maxDeposit: number
  maxOrderValue: number
  fee: number
  change24h: string
}

export interface FeeTable {
  min: number
  max?: number
  fee: number
}
