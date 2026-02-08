
export enum ViewState {
  LANDING = 'LANDING',
  ONBOARDING_1 = 'ONBOARDING_1',
  ONBOARDING_2 = 'ONBOARDING_2',
  DASHBOARD = 'DASHBOARD',
  SINGLESOURCE = 'SINGLESOURCE',
  BRAYJOBS = 'BRAYJOBS',
  DOUBLETHING = 'DOUBLETHING',
  PROFILE = 'PROFILE',
  MESSAGING = 'MESSAGING',
  DEV_TOOLS = 'DEV_TOOLS',
  BOOKING = 'BOOKING',
  BOOKING_CONFIRMED = 'BOOKING_CONFIRMED',
  INCIDENT_REVIEW = 'INCIDENT_REVIEW',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS'
}

export interface Worker {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'Verified' | 'In Progress' | 'Action Required';
  rating: number;
  hours: number;
  reliability: number;
}

export interface FeedItem {
  id: string;
  module: 'SingleSource' | 'BrayJobs' | 'DoubleThing';
  title: string;
  description: string;
  time: string;
  priority?: 'High' | 'Normal';
  actionLabel?: string;
}
