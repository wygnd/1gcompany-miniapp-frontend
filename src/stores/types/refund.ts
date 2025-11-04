export interface IRefundState {
  refunds: IRefund[]

}

export interface IRefund {
  refundId: number
  title: string
  organization: string
  address: string
  attachmentUrl: string
  attachmentId: string
  countProduct: string
}
