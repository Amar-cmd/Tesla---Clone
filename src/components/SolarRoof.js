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

function SolarRoof() {

  document.title = 'Solar Roof | Tesla';

  return (
    <div>
      <Header
      filter_color='1'
      color_text='dark'
      />

<MainSection 
      title='Solar Roof'
      desc='Transform your roof and produce clean energy'
      bgImg='tesla-cdn_thron_com-Solar-Roof-Hero-Desktop-Global.jpg'
      first_page_h1_one='View'
      first_page_p_one='Beautiful Solar'
      second_page_h1_one='25-Year'
      second_page_p_one='Tile Warrenty'
      third_page_h1_one='24/7'
      third_page_p_one='Outage protection'
      />

<TopImageBottomText
      bgImg = 'solar-roof.jpg'
      color_text = 'dark'
      detail_left_h3='Design'
      detail_left_h1="Complement Your Home's Aesthetic"
      detail_right_p='Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. Chat with an Energy Advisor to ask any questions about installing solar with Tesla.'
      second_btn='Order Now'
      />

<RightImageLeftText
bgImg='tesla-cdn_thron_com-Solar-Roof-Energy-Desktop-Global.jpg'
    heading_h3='Energy Storage'
    heading_h1='Protection Against Outages'
    detail='Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.'
    first_btn='Learn More'
    second_btn='Order Now'
/>

<LeftVideoRightTextSection
      h3_heading = 'Durability'
      h1_heading = 'Take on the Elements'
      text = 'Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come.'
      videos='/videos/SolarRoof.webm'
      />

<RightImageLeftText 
  bgImg='Inverter_V8_D.jpg'
  heading_h3='Efficiency'
  heading_h1='Maximum Solar Production'
  detail='Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures Tesla Solar Inverter continues to improve with each over-the-air software update. '
  second_btn='Order Now'
/>

<TopImageBottomText 
bgImg = 'SR-tesla-app-D.jpg'
color_text = 'dark'
detail_left_h3='Control'
detail_left_h1="Monitor and Optimize"
detail_right_p='With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.'
second_btn='Order Now'
/>

<RightImageLeftText 
  bgImg='tesla-cdn_thron_com-Solar-Roof-Value-Desktop-Global.jpg'
  heading_h3='Value'
  heading_h1='Pay Less for Electricity'
  detail='Solar Roof helps pay for itself with the energy it produces. As a fully integrated system, Solar Roof can maximize your solar generation and help you take control of your monthly electricity bill. '
  second_btn='Order Now'
/>

<SpecificationSection
            bgImg='PanelMeasure_desktop2x.avif'
            title = 'Solar Roof '
            

            perf_battery_h1 = 'Tile and Power Warranty'
            perf_battery_p = '25 years'
            
            perf_acceleration_h1 = '*Solar Glass Tiles'
            perf_acceleration_p = '72 W'
            
            perf_range_h1 = 'Steel Tiles'
            perf_range_p = 'Corrosion and weather resistant '

            perf_drive_h1 = 'Wind Rating'
            perf_drive_p = 'Class F (highest rating)'

            perf_seating_h1 = 'Seating'
            perf_seating_p = 'Up to 5'

            perf_wheels_h1 = 'Wheels'
            perf_wheels_p = '21"'

            perf_weight_h1 = 'Weight'
            perf_weight_p = '4,398 lbs'

            perf_mcv_h1 = 'Max Cargo Volume'
            perf_mcv_p = '76 cu ft'

            perf_ts_h1 = 'Top Speed'
            perf_ts_p = '155 mph'

            perf_display_h1 = 'Displays'
            perf_display_p = '15" Center Touchscreen'

            perf_sc_h1 = 'Supercharging '
            perf_sc_p = 'Max/Payment Type 250 kW Max; Pay Per Use'

            perf_warrenty_h1 = 'Warranty '
            perf_warrenty_p = 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first '

            perf_warrenty_p2 = 'Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'


            lrawd_battery_h1 = 'Battery'
            lrawd_battery_p = 'Long Range'
            
            lrawd_acceleration_h1 = 'Acceleration'
            lrawd_acceleration_p = '4.8 s 0-60 mph'
            
            lrawd_range_h1 = 'Range'
            lrawd_range_p = '330 miles (EPA est.) '

            lrawd_drive_h1 = 'Drive'
            lrawd_drive_p = 'Dual Motor All-Wheel Drive'

            lrawd_seating_h1 = 'Seating'
            lrawd_seating_p = 'Up to 7'

            lrawd_wheels_h1 = 'Wheels'
            lrawd_wheels_p = '19" or 20"'

            lrawd_weight_h1 = 'Weight'
            lrawd_weight_p = '4,363 lbs'

            lrawd_mcv_h1 = 'Max Cargo Volume'
            lrawd_mcv_p = '76 cu ft'

            lrawd_ts_h1 = 'Top Speed'
            lrawd_ts_p = '135 mph'

            lrawd_display_h1 = 'Displays'
            lrawd_display_p = '15" Center Touchscreen'

            lrawd_sc_h1 = 'Supercharging '
            lrawd_sc_p = 'Max/Payment Type 250 kW Max; Pay Per Use'

            lrawd_warrenty_h1 = 'Warranty '
            lrawd_warrenty_p = 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first '

            lrawd_warrenty_p2 = 'Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'


        />

<OrderSection2 
  title_h2='Transform Your Roof'
  title_p='Order now or chat with an Energy Advisor for more Information'
  first_btn = 'Order Now'
  second_btn = 'Chat With Energy Advisor'
  title_a = 'Get Updates'
/>
    </div>
  )
}

export default SolarRoof
