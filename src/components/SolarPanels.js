import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import MainSection from './MainSection'
import LeftImageRightTextSection from './Sections/LeftImageRightTextSection'
import LeftVideoRightTextSection from './Sections/LeftVideoRightTextSection'
import OrderSection from './Sections/OrderSection'
import OrderSection2 from './Sections/OrderSection2'
import RightImageLeftText from './Sections/RightImageLeftText'
import SpecificationSection from './Sections/SpecificationSection'
import TopImageBottomText from './Sections/TopImageBottomText'
import UtilitySection from './Sections/UtilitySection'

function SolarPanels(props) {

    document.title = 'Solar Panels | Tesla';
  return (
    <div>
      <Header
      filter_color='0'
      color_text='light'
      />

<MainSection 
      title='Solar for Existing Roofs'
      desc='Lowest Cost Solar Panels in America—Money-back guarantee'
      bgImg='solar-panel.jpg'
      first_page_h1_one='Go Green'
      first_page_p_one='Convert Sunlight to Energy'
      second_page_h1_one='$'
      second_page_p_one='Guaranteed Lowest Price for Solar'
      third_page_h1_one='24/7'
      third_page_p_one='Energy Monitoring'
      />

<LeftVideoRightTextSection
      h3_heading = 'Savings'
      h1_heading = 'Electricity For Less'
      text = "Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Learn more about your potential savings in our Design Studio."
      videos='/videos/Solar Panels.mp4'
      second_btn='See Your Savings'
      />

<RightImageLeftText
    bgImg='_25-Design-D.jpg'
    heading_h3='Design'
    heading_h1='Sleek and Durable'
    detail='Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Chat with an energy advisor or request a call to ask any questions about Tesla solar panels.'
    first_btn='Learn More'
    second_btn='Order Now'
/>

<TopImageBottomText
      bgImg = 'PW-Inverter-Hero-D.jpg'
      color_text = 'dark'
      detail_left_h3='Powerwall'
      detail_left_h1="Home Battery Backup"
      detail_right_p='Your Powerwall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage.'
      first_btn='Order Now'
      second_btn='Learn More'
      />

<LeftVideoRightTextSection
      h3_heading = 'Power On'
      h1_heading = 'Order and Installation'
      text = 'From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with an energy advisor to ask any questions about going solar with Tesla.'
      videos='/videos/SolarPanels2.mp4'
      second_btn='Order Now'

      />


<RightImageLeftText 
  bgImg='Inverter_V8_D.avif'
  heading_h3='Efficiency'
  heading_h1='Maximum Solar Production'
  detail='Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable.  '
  second_btn='Order Now'
/>

<TopImageBottomText 
bgImg = 'SP-tesla-app-D.jpg'
color_text = 'dark'
detail_left_h3='Experience'
detail_left_h1="24/7 Monitoring"
detail_right_p='Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.'
second_btn='Order Now'
/>

<SpecificationSection
            bgImg='_25-Specs-D.jpg'
            title = 'Solar Panel '
            

            perf_battery_h1 = 'Wattage'
            perf_battery_p = '400 W'
            
            perf_acceleration_h1 = 'Operating Temperature'
            perf_acceleration_p = '-40°F up to +185°F'
            
            perf_range_h1 = 'Dimensions'
            perf_range_p = '74.4" x 41.2" x 1.57"      (including frame) '

            perf_drive_h1 = 'Design'
            perf_drive_p = 'Black anodized aluminum alloy frameBlack solar cells and backsheet'

            perf_seating_h1 = 'Warranty'
            perf_seating_p = '25-year performance guarantee'

            
            perf_weight_h1 = 'Certifications'
            perf_weight_p = 'IEC / UL 61730, CEC Listed, IEC 61215'

            perf_mcv_h1 = 'Inverter Power'
            perf_mcv_p = '3.8kW / 7.6kW 97.5% efficiency'

            perf_ts_h1 = 'Inverter Dimensions'
            perf_ts_p = '26" x 16" x 6"'

            perf_display_h1 = 'Inverter Warranty'
            perf_display_p = '12.5 years '

        />

<OrderSection2 
  title_h2='Power Your Home'
  title_p='Order now or talk to a Tesla Advisor if you have any questions'
  first_btn = 'Order Now'
  second_btn = 'Chat With Energy Advisor'
  title_a = 'Get Updates'
/>
    </div>
  )
}

export default SolarPanels
