import React, { useState } from 'react'
import MO, { INewModalRef } from '../../ui/Modal'
import TextField from '../../ui/TextField'
import Button from '../../ui/Button'
import { useCreateReview } from '../../../graphql/hooks'

type NewProductReviewModalType = {
  loading?: boolean
  onSubmit: (review: string) => void
}

const NewProductReviewModal: React.FC<
  INewModalRef & NewProductReviewModalType
> = ({ onClose, loading, onSubmit }) => {
  const [review, setReview] = useState('')

  return (
    <MO.Modal onBackdropClick={onClose}>
      <MO.ModalHeader title="New review" onClose={onClose} />
      <MO.ModalBody className="mx-auto">
        <TextField
          disabled={loading}
          id="review"
          label="Review"
          placeholder="type your opinion about this product"
          type="textarea"
          value={review}
          onChange={setReview}
        />
      </MO.ModalBody>
      <MO.ModalFooter className="flex">
        <Button
          className="w-56"
          disabled={loading}
          loading={loading}
          onClick={() => onSubmit(review)}
        >
          Create review
        </Button>
      </MO.ModalFooter>
    </MO.Modal>
  )
}

export const useNewProductReviewModal = (productName: string) => {
  const [show, setShow] = useState(false)
  const { createReview, loading } = useCreateReview()

  const handleOnClose = () => {
    setShow(false)
  }

  const handleSubmit = async (review: string) => {
    try {
      const { data } = await createReview({
        text: review,
        itemName: productName,
      })
      console.log('Review successfully created', data)
      setShow(false)
    } catch (error) {
      // TODO: handle error
      console.log(error)
      alert('Could not create review. Try again later')
    }
  }

  return {
    render: show && (
      <NewProductReviewModal
        loading={loading}
        onClose={handleOnClose}
        onSubmit={handleSubmit}
      />
    ),
    open: () => setShow(true),
  }
}
