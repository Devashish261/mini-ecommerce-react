import React from 'react';

export default function Navbar({
    search, setSearch,
    category, setCategory, categories,
    sort, setSort,
    onClear
}) {
    return (
        <nav style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '1.5rem 0',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-color)'
        }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
                <input
                    className="input"
                    style={{ width: '100%' }}
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <select
                className="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            <select
                className="select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">Sort by Price</option>
                <option value="low-high">Low → High</option>
                <option value="high-low">High → Low</option>
            </select>

            <button className="btn btn-primary" onClick={onClear}>
                Clear Filters
            </button>
        </nav>
    );
}
