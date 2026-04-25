import React from 'react'
import Button from './Button'

const ConfirmModal = ({
    isOpen,
    title = "Confirm Action",
    message = "Are you sure?",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    isLoading = false,
}) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-2 muted-text">{message}</p>

                <div className="mt-6 flex justify-end gap-3">
                    <Button
                        type="button"
                        bgColor="app-btn-secondary"
                        onClick={onCancel}
                        disabled={isLoading}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        type="button"
                        bgColor="app-btn-danger"
                        onClick={onConfirm}
                        isLoading={isLoading}
                        disabled={isLoading}
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
