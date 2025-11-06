export interface IRefund {
  refundId: number
  title: string
  organization: string
  address: string
  attachmentUrl: string
  attachmentId: string
  countProduct: string
}

export interface IRefundCreate {
  title: string
  organization: string
  address: string
  countProduct: string
}
