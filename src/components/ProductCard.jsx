import React from 'react';

export default function ProductCard({ product, addToCart }) {
    const isOutOfStock = product.stock === 0;

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <div style={{
                height: '180px',
                marginBottom: '1rem',
                overflow: 'hidden',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: '#262626'
            }}>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </div>

            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{product.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'capitalize' }}>
                    {product.category}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-primary)' }}>
                        ₹{product.price}
                    </span>
                    <span style={{
                        fontSize: '0.8rem',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: isOutOfStock ? '#3d1212' : '#123d1d',
                        color: isOutOfStock ? '#ff6b6b' : '#4ade80'
                    }}>
                        {isOutOfStock ? "Out of Stock" : "In Stock"}
                    </span>
                </div>
            </div>

            <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 'auto' }}
                disabled={isOutOfStock}
                onClick={() => addToCart(product)}
            >
                {isOutOfStock ? "Sold Out" : "Add to Cart"}
            </button>
        </div>
    );
}
