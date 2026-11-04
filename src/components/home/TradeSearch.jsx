import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Truck, ChevronDown, Network } from 'lucide-react';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

export const TradeSearch = ({ onSearch, containerStyle = {} }) => {
  const [activeSearchOption, setActiveSearchOption] = useState('products');
  const [category, setCategory] = useState('All Categories');
  const [country, setCountry] = useState('All Countries');
  const [userType, setUserType] = useState('Supplier / Buyer');
  const [shipmentId, setShipmentId] = useState('');

  const searchOptions = [
    { id: 'products',   label: 'Search Products', icon: Search },
    { id: 'suppliers',  label: 'Find Suppliers',  icon: Network },
    { id: 'buyers',     label: 'Find Buyers',     icon: Users },
    { id: 'track',      label: 'Track Shipment',  icon: Truck },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ activeSearchOption, category, country, userType, shipmentId });
    }
  };

  const selectStyle = {
    width: '100%',
    height: '34px',
    padding: '0 24px 0 10px',
    fontSize: '11px',
    color: '#FFFFFF',
    background: 'rgba(0, 0, 0, 0.22)',
    border: '1px solid rgba(255, 255, 255, 0.24)',
    borderRadius: '6px',
    appearance: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontWeight: '500',
    backdropFilter: 'blur(4px)',
  };

  return (
    <div
      className="trade-search-panel"
      style={{
        width: '100%',
        boxSizing: 'border-box',
        margin: '0',
        ...containerStyle,
        background: 'linear-gradient(90deg, #F95A00 0%, #FF6C00 45%, #FF7B00 100%)',
        border: '1px solid rgba(255, 255, 255, 0.22)',
        borderRadius: '12px',
        padding: '10px 18px',
        minHeight: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '14px',
        flexWrap: 'wrap',
        boxShadow: '0 4px 20px rgba(249, 90, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated dot-pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Subtle shine highlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.04) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Left Title: What are you looking for? */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.12, flexShrink: 0, zIndex: 1 }}
      >
        <span style={{ fontSize: '15px', fontFamily: "'Georgia', serif", color: '#FFFFFF', fontWeight: '700' }}>
          What are you
        </span>
        <span style={{ fontSize: '15px', fontFamily: "'Georgia', serif", color: '#FFFFFF', fontWeight: '700' }}>
          looking for?
        </span>
      </motion.div>

      {/* Options Bar with Dividers */}
      <div
        className="trade-search-options"
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.22)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          padding: '3px 4px',
          zIndex: 1,
          backdropFilter: 'blur(4px)',
        }}
      >
        {searchOptions.map((option, idx) => {
          const Icon = option.icon;
          const isSelected = activeSearchOption === option.id;
          return (
            <React.Fragment key={option.id}>
              {idx > 0 && (
                <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255, 255, 255, 0.28)', margin: '0 3px' }} />
              )}
              <motion.button
                type="button"
                onClick={() => setActiveSearchOption(option.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 11px',
                  borderRadius: '5px',
                  fontSize: '11px',
                  fontWeight: isSelected ? '700' : '500',
                  color: '#FFFFFF',
                  background: isSelected ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                  border: isSelected ? '1.5px solid rgba(255, 255, 255, 0.7)' : '1.5px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 0 10px rgba(255, 255, 255, 0.2)' : 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                <Icon size={13} color="#FFFFFF" />
                <span>{option.label}</span>
              </motion.button>
            </React.Fragment>
          );
        })}
      </div>

      {/* Right Form Controls */}
      <form
        onSubmit={handleFormSubmit}
        className="trade-search-form"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          flex: 1,
          justifyContent: 'flex-end',
          zIndex: 1,
        }}
      >
        {/* Category */}
        <div style={{ position: 'relative', minWidth: '118px' }}>
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={selectStyle}>
            <option value="All Categories" style={{ background: '#334155', color: '#FFFFFF' }}>All Categories</option>
            <option value="Electronics" style={{ background: '#334155', color: '#FFFFFF' }}>Electronics</option>
            <option value="Agriculture" style={{ background: '#334155', color: '#FFFFFF' }}>Agriculture</option>
            <option value="Industrial" style={{ background: '#334155', color: '#FFFFFF' }}>Industrial Goods</option>
            <option value="Chemicals" style={{ background: '#334155', color: '#FFFFFF' }}>Chemicals</option>
          </select>
          <ChevronDown size={12} color="rgba(255, 255, 255, 0.85)" style={{ position: 'absolute', right: '8px', top: '11px', pointerEvents: 'none' }} />
        </div>

        {/* Country */}
        <div style={{ position: 'relative', minWidth: '110px' }}>
          <select value={country} onChange={(e) => setCountry(e.target.value)} style={selectStyle}>
            <option value="All Countries" style={{ background: '#334155', color: '#FFFFFF' }}>All Countries</option>
            <option value="USA" style={{ background: '#334155', color: '#FFFFFF' }}>United States</option>
            <option value="Germany" style={{ background: '#334155', color: '#FFFFFF' }}>Germany</option>
            <option value="Japan" style={{ background: '#334155', color: '#FFFFFF' }}>Japan</option>
            <option value="China" style={{ background: '#334155', color: '#FFFFFF' }}>China</option>
            <option value="India" style={{ background: '#334155', color: '#FFFFFF' }}>India</option>
          </select>
          <ChevronDown size={12} color="rgba(255, 255, 255, 0.85)" style={{ position: 'absolute', right: '8px', top: '11px', pointerEvents: 'none' }} />
        </div>

        {/* User Type */}
        <div style={{ position: 'relative', minWidth: '120px' }}>
          <select value={userType} onChange={(e) => setUserType(e.target.value)} style={selectStyle}>
            <option value="Supplier / Buyer" style={{ background: '#334155', color: '#FFFFFF' }}>Supplier / Buyer</option>
            <option value="Verified Supplier" style={{ background: '#334155', color: '#FFFFFF' }}>Verified Supplier</option>
            <option value="Verified Buyer" style={{ background: '#334155', color: '#FFFFFF' }}>Verified Buyer</option>
          </select>
          <ChevronDown size={12} color="rgba(255, 255, 255, 0.85)" style={{ position: 'absolute', right: '8px', top: '11px', pointerEvents: 'none' }} />
        </div>

        {/* Shipment ID */}
        <input
          type="text"
          placeholder="Enter Shipment ID"
          value={shipmentId}
          onChange={(e) => setShipmentId(e.target.value)}
          style={{
            height: '34px',
            width: '128px',
            padding: '0 10px',
            fontSize: '11px',
            color: '#FFFFFF',
            background: 'rgba(0, 0, 0, 0.22)',
            border: '1px solid rgba(255, 255, 255, 0.24)',
            borderRadius: '6px',
            outline: 'none',
            fontFamily: 'var(--font-body)',
            fontWeight: '500',
            backdropFilter: 'blur(4px)',
          }}
        />

        {/* Search Global Trade Button */}
        <motion.button
          type="submit"
          whileHover={{
            y: -1.5,
            boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
          }}
          whileTap={{ scale: 0.96, y: 0 }}
          transition={SPRING}
          style={{
            height: '34px',
            padding: '0 18px',
            fontSize: '11.5px',
            fontWeight: '700',
            color: '#7A2E00',
            background: 'linear-gradient(135deg, #FFE855 0%, #FFCC00 60%, #FFA800 100%)',
            borderRadius: '6px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.01em',
          }}
        >
          Search Global Trade
        </motion.button>
      </form>
    </div>
  );
};
