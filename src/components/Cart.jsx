import React from 'react';

export default function Cart({ cart, removeFromCart, addToCart, decrementFromCart, totalItems, totalPrice, onCheckout }) {
    if (cart.length === 0) {
        return (
            <div className="card" style={{ marginTop: '2rem', textAlign: 'center', padding: '3rem' }}>
                <p style={{ color: 'var(--text-secondary)' }}>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="card" style={{ marginTop: '2rem' }}>
            <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                Shopping Cart ({totalItems})
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cart.map(item => (
                    <div key={item.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'var(--bg-elevated)',
                        padding: '1rem',
                        borderRadius: 'var(--radius-sm)'
                    }}>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.title}</h4>
                            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                ₹{item.price} each
                            </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                            {/* QUANTITY CONTROLS */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#333', padding: '4px', borderRadius: '6px' }}>
                                <button
                                    style={{
                                        padding: '4px 8px',
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                    onClick={() => decrementFromCart(item)}
                                >
                                    −
                                </button>
                                <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold' }}>{item.qty}</span>
                                <button
                                    style={{
                                        padding: '4px 8px',
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                    disabled={item.qty >= item.stock}
                                    onClick={() => addToCart(item)}
                                >
                                    +
                                </button>
                            </div>

                            <div style={{ fontWeight: 'bold', minWidth: '60px', textAlign: 'right' }}>
                                ₹{item.qty * item.price}
                            </div>

                            <button
                                className="btn btn-danger"
                                style={{ padding: '0.4rem', fontSize: '1.2rem', lineHeight: 1 }}
                                onClick={() => removeFromCart(item.id)}
                                title="Remove Item"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Total</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    ₹{totalPrice}
                </span>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                <button
                    className="btn btn-primary"
                    style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
                    onClick={onCheckout}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}
