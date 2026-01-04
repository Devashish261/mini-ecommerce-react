import React from 'react';

export default function CheckoutModal({ isOpen, onClose, onConfirm, totalItems, totalPrice }) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)'
        }}>
            <div className="card" style={{
                width: '90%',
                maxWidth: '500px',
                padding: '2rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
                <h2 style={{ marginTop: 0 }}>Checkout Confirmation</h2>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    You are about to place an order for <strong>{totalItems} items</strong>.
                </p>

                <div style={{
                    background: 'var(--bg-elevated)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <span>Total Amount to Pay:</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                        ₹{totalPrice}
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button
                        className="btn"
                        onClick={onClose}
                        style={{
                            backgroundColor: 'transparent',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-primary)'
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={onConfirm}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
