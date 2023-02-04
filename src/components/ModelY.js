import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import Header from './Header'
import ModelYSection from './MainSection'
import LeftImageRightTextSection from './Sections/LeftImageRightTextSection'
import LeftVideoRightTextSection from './Sections/LeftVideoRightTextSection'
import OrderSection from './Sections/OrderSection'
import SpecificationSection from './Sections/SpecificationSection'
import TopImageBottomText from './Sections/TopImageBottomText'
import UtilitySection from './Sections/UtilitySection'

function ModelY() {

  document.title = 'Model Y | Tesla';
  return (
    <div>
      <Header
      filter_color='1'
      color_text='dark'
      />

      <ModelYSection 
      title='Model Y'
      bgImg='Model-Y-Main-Hero-Desktop-Global.jfif'
      first_page_h1_one='76 cu ft'
      first_page_p_one='Cargo Space'
      second_page_h1_one='330mi'
      second_page_p_one='Range (EPA est.)'
      third_page_h1_one='AWD'
      third_page_p_one='Dual Motor'
      />

      <LeftImageRightTextSection 
      title= 'Model Y'
      h3_heading = 'Safety'
      h1_heading = 'Designed for Safety'
      />

      <UtilitySection/>
      <TopImageBottomText
         bgImg = 'AWD_hero@2.jfif'
         color_text = 'dark'
      image_detail_h1_1='2'
      image_detail_p_1='Independent motors digitally control torque to the front and rear wheels'
      image_detail_h1_2='3.5 s'
      image_detail_p_2='Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds'
      image_detail_h1_3='Weather'
      image_detail_p_3='Capable in rain, snow, mud and off-road with superior traction control'

      detail_left_h3='All-Wheel Drive'
      detail_left_h1='Dual Motor'
      detail_right_p='Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.'
      second_btn='Order Now'

      />

      <LeftVideoRightTextSection
      h3_heading = 'Range'
      h1_heading = 'Go Anywhere'
      text = 'Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week.'
      videos = '/videos/modelY.mp4'
      second_btn='Order Now'

     />

      <TopImageBottomText
      bgImg = 'Autopilot-Hero-Vision-Desktop.jpg'
      color_text = 'light'
      image_detail_h1_1='360°'
      image_detail_p_1='Rear, side and forward-facing cameras provide maximum visibility'
      image_detail_h1_2='250m'
      image_detail_p_2='Powerful visual processing at up to 250 meters of range'
      image_detail_h1_3='Sensor'
      image_detail_p_3='Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking'
      detail_left_h3='Autopilot'
      detail_left_h1='Future of Driving'
      detail_right_p="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving."
      second_btn='Order Now'

      />

      <TopImageBottomText
      bgImg = 'Model-Y-Interior-Hero-Desktop-LHD.jfif'
      color_text = 'dark'
      image_detail_h1_1='15 inch'
      image_detail_p_1='A touchscreen display designed to improve over time'
      image_detail_h1_2='Wi-Fi'
      image_detail_p_2='Over-the-air software updates introduce new features, functionality and performance'
      image_detail_h1_3='Roof'
      image_detail_p_3='An expansive Glass Roof provides more headroom and UV protection'
      detail_left_h3='Interior'
      detail_left_h1='Built Around the Driver'
      detail_right_p="With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky."
      second_btn='Order Now'

      />

        <SpecificationSection
            bgImg = 'Model-3-Specs-Desktop-Mobile-LHD.jpg'
            title = 'Model Y '
            performance = 'Performance'
            lrawd = 'Long Range AWD'

            perf_battery_h1 = 'Battery'
            perf_battery_p = 'Long Range'
            
            perf_acceleration_h1 = '*Acceleration'
            perf_acceleration_p = '3.5 s 0-60 mph with rollout subtracted'
            
            perf_range_h1 = 'Range'
            perf_range_p = '303 miles (EPA est.) '

            perf_drive_h1 = 'Drive'
            perf_drive_p = 'Dual Motor All-Wheel Drive'

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

      <OrderSection 
      bgImg = 'Model-Y-Order-Hero-Desktop-Mobile-Global.jfif'
      
      />
    </div>
  )
}

export default ModelY
