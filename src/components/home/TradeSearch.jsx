import React, { useState } from 'react';
import { Search, Users, Truck, ChevronDown, Network } from 'lucide-react';

export const TradeSearch = ({ onSearch }) => {
  const [activeSearchOption, setActiveSearchOption] = useState('products');
  const [category, setCategory] = useState('All Categories');
  const [country, setCountry] = useState('All Countries');
  const [userType, setUserType] = useState('Supplier / Buyer');
  const [shipmentId, setShipmentId] = useState('');

  const searchOptions = [
    { id: 'products', label: 'Search Products', icon: Search },
    { id: 'suppliers', label: 'Find Suppliers', icon: Network },
    { id: 'buyers', label: 'Find Buyers', icon: Users },
    { id: 'track', label: 'Track Shipment', icon: Truck },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ activeSearchOption, category, country, userType, shipmentId });
    }
  };

  return (
    <div
      className="trade-search-panel"
      style={{
        margin: '16px 28px 0 28px',
        background: 'var(--navy-panel)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '0 16px',
        minHeight: '63px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Left Title: What are you looking for? */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, flexShrink: 0 }}>
        <span style={{ fontSize: '15px', fontFamily: 'var(--font-heading)', color: 'var(--white)', fontWeight: '600' }}>
          What are you
        </span>
        <span style={{ fontSize: '15px', fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontWeight: '700' }}>
          looking for?
        </span>
      </div>

      {/* Options Bar with Vertical Dividers */}
      <div
        className="trade-search-options"
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0, 18, 41, 0.5)',
          borderRadius: '5px',
          border: '1px solid rgba(41, 65, 93, 0.6)',
          padding: '3px 4px'
        }}
      >
        {searchOptions.map((option, idx) => {
          const Icon = option.icon;
          const isSelected = activeSearchOption === option.id;
          return (
            <React.Fragment key={option.id}>
              {idx > 0 && (
                <div style={{ width: '1px', height: '18px', backgroundColor: 'var(--border)', margin: '0 4px' }} />
              )}
              <button
                type="button"
                onClick={() => setActiveSearchOption(option.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: isSelected ? '700' : '500',
                  color: isSelected ? 'var(--gold)' : 'var(--white)',
                  background: isSelected ? 'rgba(250, 174, 43, 0.12)' : 'transparent',
                  border: isSelected ? '1px solid rgba(250, 174, 43, 0.3)' : '1px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={13} color={isSelected ? 'var(--gold)' : 'var(--white)'} />
                <span>{option.label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>

      {/* Right Controls Form */}
      <form
        onSubmit={handleFormSubmit}
        className="trade-search-form"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          flex: 1,
          justifyContent: 'flex-end'
        }}
      >
        {/* Category Dropdown */}
        <div style={{ position: 'relative', minWidth: '120px' }}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              height: '32px',
              padding: '0 24px 0 10px',
              fontSize: '10.5px',
              color: 'var(--white)',
              background: 'var(--navy)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              appearance: 'none',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All Categories">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Industrial">Industrial Goods</option>
            <option value="Chemicals">Chemicals</option>
          </select>
          <ChevronDown size={12} color="var(--text-muted)" style={{ position: 'absolute', right: '8px', top: '10px', pointerEvents: 'none' }} />
        </div>

        {/* Country Dropdown */}
        <div style={{ position: 'relative', minWidth: '110px' }}>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{
              width: '100%',
              height: '32px',
              padding: '0 24px 0 10px',
              fontSize: '10.5px',
              color: 'var(--white)',
              background: 'var(--navy)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              appearance: 'none',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All Countries">All Countries</option>
            <option value="USA">United States</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="India">India</option>
          </select>
          <ChevronDown size={12} color="var(--text-muted)" style={{ position: 'absolute', right: '8px', top: '10px', pointerEvents: 'none' }} />
        </div>

        {/* User Type Dropdown */}
        <div style={{ position: 'relative', minWidth: '120px' }}>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            style={{
              width: '100%',
              height: '32px',
              padding: '0 24px 0 10px',
              fontSize: '10.5px',
              color: 'var(--white)',
              background: 'var(--navy)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              appearance: 'none',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="Supplier / Buyer">Supplier / Buyer</option>
            <option value="Verified Supplier">Verified Supplier</option>
            <option value="Verified Buyer">Verified Buyer</option>
          </select>
          <ChevronDown size={12} color="var(--text-muted)" style={{ position: 'absolute', right: '8px', top: '10px', pointerEvents: 'none' }} />
        </div>

        {/* Shipment ID Input */}
        <input
          type="text"
          placeholder="Enter Shipment ID"
          value={shipmentId}
          onChange={(e) => setShipmentId(e.target.value)}
          style={{
            height: '32px',
            width: '125px',
            padding: '0 10px',
            fontSize: '10.5px',
            color: 'var(--white)',
            background: 'var(--navy)',
            border: '1px solid var(--border)',
            borderRadius: '5px',
            outline: 'none'
          }}
        />

        {/* Search Global Trade Gold Button */}
        <button
          type="submit"
          style={{
            height: '32px',
            padding: '0 14px',
            fontSize: '11px',
            fontWeight: '700',
            color: 'var(--navy)',
            background: 'var(--gold)',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 10px rgba(250, 174, 43, 0.25)'
          }}
        >
          Search Global Trade
        </button>
      </form>
    </div>
  );
};
