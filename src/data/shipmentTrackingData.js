export const defaultShipment = {
  trackingId: 'KPL-EXP-2026-008421',
  type: 'Ocean Freight',
  origin: 'Chennai, India',
  originPort: 'Port of Chennai (INMAA)',
  destination: 'Rotterdam, Netherlands',
  destinationPort: 'Port of Rotterdam (NLRTM)',
  estimatedDelivery: '18 Nov 2026',
  mode: 'Ocean Freight',
  containerId: 'KPLU 482019-6',
  status: 'In Transit',
  vesselName: 'MV Global Pioneer',
  voyageNumber: 'GP-402W',
  speedKnots: '18.4',
  heading: '295° NW',
  currentLocationName: 'Arabian Sea / Gulf of Aden Transit',
  activeStep: 3, // 1: Booking Confirmed, 2: Picked Up, 3: In Transit, 4: Delivered
  steps: [
    { id: 1, title: 'Booking Confirmed', completed: true },
    { id: 2, title: 'Picked Up', completed: true },
    { id: 3, title: 'In Transit', current: true, completed: false },
    { id: 4, title: 'Delivered', completed: false },
  ],
  updates: [
    {
      id: 1,
      status: 'In Transit',
      description: 'Vessel en route to destination',
      timestamp: '14 Nov 2026, 08:30 UTC',
      location: 'Arabian Sea Corridor',
      isCurrent: true,
    },
    {
      id: 2,
      status: 'Departed Port',
      description: 'Shanghai, China',
      timestamp: '10 Nov 2026, 16:20 UTC',
      location: 'Port of Shanghai',
      isCurrent: false,
    },
    {
      id: 3,
      status: 'Loaded on Vessel',
      description: 'Shanghai, China',
      timestamp: '08 Nov 2026, 10:15 UTC',
      location: 'Berth 4C, Shanghai Terminal',
      isCurrent: false,
    },
    {
      id: 4,
      status: 'Booking Confirmed',
      description: 'Chennai, India',
      timestamp: '07 Nov 2026, 14:10 UTC',
      location: 'KPL Regional Operations Hub',
      isCurrent: false,
    },
  ],
};

export const mockShipmentsDatabase = {
  'KPL-EXP-2026-008421': defaultShipment,
  'KPL-AIR-2026-119402': {
    trackingId: 'KPL-AIR-2026-119402',
    type: 'Air Freight',
    origin: 'Dubai, UAE',
    originPort: 'Dubai Intl Airport (DXB)',
    destination: 'New York, USA',
    destinationPort: 'John F. Kennedy Intl (JFK)',
    estimatedDelivery: '08 Nov 2026',
    mode: 'Air Freight',
    containerId: 'AWB-792014-DXB',
    status: 'Delivered',
    vesselName: 'Boeing 777-F / Emirates SkyCargo',
    voyageNumber: 'EK-9410',
    speedKnots: '0',
    heading: 'Landed / Docked',
    currentLocationName: 'JFK Air Cargo City, New York',
    activeStep: 4,
    steps: [
      { id: 1, title: 'Booking Confirmed', completed: true },
      { id: 2, title: 'Picked Up', completed: true },
      { id: 3, title: 'In Transit', completed: true },
      { id: 4, title: 'Delivered', current: true, completed: true },
    ],
    updates: [
      {
        id: 1,
        status: 'Delivered',
        description: 'Consignee received and signed off delivery at JFK Cargo City',
        timestamp: '08 Nov 2026, 18:40 EST',
        location: 'JFK CargoCity, New York',
        isCurrent: true,
      },
      {
        id: 2,
        status: 'Customs Cleared',
        description: 'US Customs and Border Protection cleared entry',
        timestamp: '08 Nov 2026, 14:20 EST',
        location: 'JFK Customs EDI Gateway',
        isCurrent: false,
      },
      {
        id: 3,
        status: 'Flight Landed',
        description: 'Flight EK-9410 safely touched down at JFK',
        timestamp: '08 Nov 2026, 11:15 EST',
        location: 'JFK International Airport',
        isCurrent: false,
      },
      {
        id: 4,
        status: 'In Transit',
        description: 'Cruising at 34,000 ft en route to JFK',
        timestamp: '08 Nov 2026, 06:45 UTC',
        location: 'Atlantic Air Corridor',
        isCurrent: false,
      },
      {
        id: 5,
        status: 'Departed Airport',
        description: 'Departed DXB Terminal 2',
        timestamp: '08 Nov 2026, 01:20 UTC',
        location: 'Dubai Cargo Gateway',
        isCurrent: false,
      },
      {
        id: 6,
        status: 'Loaded on Aircraft',
        description: 'Customs cleared & palletized',
        timestamp: '07 Nov 2026, 21:10 UTC',
        location: 'DXB Cargo Mega Terminal',
        isCurrent: false,
      },
      {
        id: 7,
        status: 'Booking Confirmed',
        description: 'Air Waybill issued',
        timestamp: '06 Nov 2026, 11:00 UTC',
        location: 'Dubai Logistics City',
        isCurrent: false,
      },
    ],
  },
  'KPL-TRK-2026-552910': {
    trackingId: 'KPL-TRK-2026-552910',
    type: 'Inland Freight',
    origin: 'Hamburg, Germany',
    originPort: 'Hamburg Freight Terminal Hub',
    destination: 'Munich, Germany',
    destinationPort: 'Munich Inland Distribution Park',
    estimatedDelivery: '14 Nov 2026',
    mode: 'Inland Freight',
    containerId: 'TRK-984210-EU',
    status: 'Booking Confirmed',
    vesselName: 'Volvo FH-16 Express Logistics Fleet',
    voyageNumber: 'TRK-402E',
    speedKnots: '0 km/h',
    heading: 'Stationary / Depot',
    currentLocationName: 'Hamburg Central Logistics Hub Berth 12',
    activeStep: 1,
    steps: [
      { id: 1, title: 'Booking Confirmed', current: true, completed: false },
      { id: 2, title: 'Picked Up', completed: false },
      { id: 3, title: 'In Transit', completed: false },
      { id: 4, title: 'Delivered', completed: false },
    ],
    updates: [
      {
        id: 1,
        status: 'Booking Confirmed',
        description: 'Consignment booking verified & carrier truck scheduled',
        timestamp: '09 Nov 2026, 11:30 CET',
        location: 'Hamburg Central Logistics Hub',
        isCurrent: true,
      },
      {
        id: 2,
        status: 'Electronic Waybill Issued',
        description: 'CMR road transport document generated',
        timestamp: '09 Nov 2026, 09:15 CET',
        location: 'KPL Continental Dispatch',
        isCurrent: false,
      },
    ],
  },
  'KPL-EXP-2026-003892': {
    trackingId: 'KPL-EXP-2026-003892',
    type: 'Ocean Freight',
    origin: 'Mumbai, India',
    originPort: 'Nhava Sheva Port (INNSA)',
    destination: 'Singapore',
    destinationPort: 'Port of Singapore (SGSIN)',
    estimatedDelivery: '05 Nov 2026',
    mode: 'Ocean Freight',
    containerId: 'KPLU 773102-1',
    status: 'Delivered',
    vesselName: 'Ever Forward 202',
    voyageNumber: 'EF-118S',
    speedKnots: '0.0',
    heading: 'Docked',
    currentLocationName: 'Jurong Island Logistics Facility',
    activeStep: 4,
    steps: [
      { id: 1, title: 'Booking Confirmed', completed: true },
      { id: 2, title: 'Picked Up', completed: true },
      { id: 3, title: 'In Transit', completed: true },
      { id: 4, title: 'Delivered', current: true, completed: true },
    ],
    updates: [
      {
        id: 1,
        status: 'Delivered',
        description: 'Consignee received and signed off delivery',
        timestamp: '05 Nov 2026, 14:30 SGT',
        location: 'Jurong Logistics Hub, Singapore',
        isCurrent: true,
      },
      {
        id: 2,
        status: 'Customs Cleared',
        description: 'Import duty & port entry approved',
        timestamp: '04 Nov 2026, 09:15 SGT',
        location: 'Singapore Customs Terminal',
        isCurrent: false,
      },
      {
        id: 3,
        status: 'Arrived at Port',
        description: 'Container discharged from vessel',
        timestamp: '03 Nov 2026, 18:00 SGT',
        location: 'Pasir Panjang Terminal',
        isCurrent: false,
      },
      {
        id: 4,
        status: 'Booking Confirmed',
        description: 'Booking established from Mumbai',
        timestamp: '25 Oct 2026, 10:00 IST',
        location: 'Mumbai Export Office',
        isCurrent: false,
      },
    ],
  },
};

export const isValidTrackingFormat = (id) => {
  if (!id || typeof id !== 'string') return false;
  const clean = id.toUpperCase().trim();
  if (mockShipmentsDatabase[clean]) return true;

  // Reject short queries or known dummy strings
  if (clean.length < 6) return false;
  const invalidKeywords = ['WRONG', 'TEST', 'INVALID', 'HELLO', 'CARGO', 'UNKNOWN', 'ERROR', 'DEMO', 'SAMPLE', 'SHIPMENT', '123456', '000000', 'ABCDEF'];
  if (invalidKeywords.includes(clean)) return false;

  // Recognizes real global trade reference formats
  const isKpl = clean.startsWith('KPL');
  const isContainer = /^[A-Z]{4}\s?[0-9]{6,7}([-_]?[0-9])?$/i.test(clean);
  const isAwb = /^(AWB[-_\s]?[0-9]{6,}|[0-9]{3}[-\s]?[0-9]{7,8})$/i.test(clean);
  const isBol = /^BL[-_\s]?[A-Z0-9]{5,}$/i.test(clean);

  return isKpl || isContainer || isAwb || isBol;
};

export const generateMockShipment = (trackingNumber) => {
  if (!trackingNumber) return null;
  const cleanId = trackingNumber.toUpperCase().trim();

  // If in database, return immediately
  if (mockShipmentsDatabase[cleanId]) {
    return mockShipmentsDatabase[cleanId];
  }

  // Validate reference pattern; if wrong / unrecognized, return null
  if (!isValidTrackingFormat(cleanId)) {
    return null;
  }

  const isAir = cleanId.includes('AIR') || cleanId.startsWith('AWB') || cleanId.includes('PLANE');
  const isInland = cleanId.includes('TRK') || cleanId.includes('ROD') || cleanId.includes('ROAD') || cleanId.includes('INLAND') || cleanId.includes('TRUCK');
  const mode = isAir ? 'Air Freight' : isInland ? 'Inland Freight' : 'Ocean Freight';

  const status = isInland ? 'Booking Confirmed' : isAir ? 'Delivered' : 'In Transit';
  const activeStep = isInland ? 1 : isAir ? 4 : 3;

  return {
    trackingId: cleanId,
    type: mode,
    origin: isAir ? 'Dubai, UAE' : isInland ? 'Hamburg, Germany' : 'Chennai, India',
    originPort: isAir ? 'Dubai International (DXB)' : isInland ? 'Hamburg Overland Hub' : 'Port of Chennai (INMAA)',
    destination: isAir ? 'New York, USA' : isInland ? 'Munich, Germany' : 'Rotterdam, Netherlands',
    destinationPort: isAir ? 'John F. Kennedy Intl (JFK)' : isInland ? 'Munich Distribution Hub' : 'Port of Rotterdam (NLRTM)',
    estimatedDelivery: isAir ? '08 Nov 2026' : isInland ? '14 Nov 2026' : '18 Nov 2026',
    mode: mode,
    containerId: isAir
      ? `AWB-${cleanId.slice(-6) || '928103'}`
      : isInland
      ? `TRK-${cleanId.slice(-6) || '552910'}-EU`
      : `KPLU ${cleanId.slice(-6) || '482019'}-6`,
    status: status,
    vesselName: isAir
      ? 'Boeing 777-F / Emirates SkyCargo'
      : isInland
      ? 'Volvo FH-16 Express Logistics Fleet'
      : 'MV Global Pioneer',
    voyageNumber: isAir ? 'EK-9410' : isInland ? 'TRK-402E' : 'GP-402W',
    speedKnots: isAir ? '0' : isInland ? '0 km/h' : '18.4',
    heading: isAir ? 'Landed / Docked' : isInland ? 'Stationary / Depot' : '295° NW',
    currentLocationName: isAir
      ? 'JFK Air Cargo City, New York'
      : isInland
      ? 'Hamburg Central Logistics Hub'
      : 'Arabian Sea / Suez Approach',
    activeStep: activeStep,
    steps: [
      { id: 1, title: 'Booking Confirmed', completed: activeStep > 1, current: activeStep === 1 },
      { id: 2, title: 'Picked Up', completed: activeStep > 2, current: activeStep === 2 },
      { id: 3, title: 'In Transit', completed: activeStep > 3, current: activeStep === 3 },
      { id: 4, title: 'Delivered', completed: activeStep === 4, current: activeStep === 4 },
    ],
    updates: [
      {
        id: 1,
        status: status,
        description: isAir
          ? 'Consignee received and signed off delivery at JFK Cargo City'
          : isInland
          ? 'Consignment booking verified & carrier truck scheduled'
          : 'Vessel en route to destination',
        timestamp: '14 Nov 2026, 08:30 UTC',
        location: isAir ? 'JFK CargoCity, New York' : isInland ? 'Hamburg Logistics Hub' : 'Corridor Transit',
        isCurrent: true,
      },
      {
        id: 2,
        status: isAir ? 'Customs Cleared' : isInland ? 'Electronic Waybill Issued' : 'Departed Port',
        description: isAir ? 'Customs entry approved & cargo released' : isInland ? 'CMR road transport document generated' : 'Dispatched from origin hub',
        timestamp: '10 Nov 2026, 16:20 UTC',
        location: isAir ? 'JFK Customs EDI Gateway' : isInland ? 'KPL Continental Dispatch' : 'Port of Departure',
        isCurrent: false,
      },
      {
        id: 3,
        status: isAir ? 'Flight Landed' : isInland ? 'Cargo Inspected' : 'Loaded on Vessel',
        description: isAir ? 'Flight safely touched down' : isInland ? 'Palletized cargo verified' : 'Stowed and secured for transit',
        timestamp: '08 Nov 2026, 10:15 UTC',
        location: isAir ? 'JFK International Airport' : isInland ? 'Hamburg Warehouse Berth 12' : 'Main Terminal Berth',
        isCurrent: false,
      },
      {
        id: 4,
        status: 'Booking Confirmed',
        description: 'Shipment recorded and verified',
        timestamp: '07 Nov 2026, 14:10 UTC',
        location: 'Operations Control Center',
        isCurrent: false,
      },
    ],
  };
};

