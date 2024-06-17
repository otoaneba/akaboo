import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot, faMagnifyingGlass, faCartShopping,  faFaceLaughBeam, faCalendarDays, faStore, faMoneyBills, faPiggyBank} from "@fortawesome/free-solid-svg-icons";

const HowItWorks = React.forwardRef(({props}, ref) => {

  return (
    <div ref={ref} className="how--it--works">
      <div>

        <h2 className="tutorial--title">Buying with akaboo</h2>
        <VerticalTimeline layout='1-column-right' className="left--column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />}
          >
            <h3 className="vertical-timeline-element-title">Browse</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
            Browse our site for great discounts on top furniture brands. Every piece is inspected, cleaned, and ready for delivery.          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faCartShopping} />}
          >
            <h3 className="vertical-timeline-element-title">Order</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Using our secure checkout, purchase and select a delivery date. We’ll get in touch to confirm your availability and email an appointment window 2 days before delivery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faFaceLaughBeam} />}
          >
            <h3 className="vertical-timeline-element-title">Enjoy</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Our white-glove team will deliver and setup your furniture. All you have to do is sit back and relax. And you can rest easy knowing your purchase helped create a better planet.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div>
        <h2 className="tutorial--title">Selling with akaboo</h2>
        <VerticalTimeline layout='1-column-left'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: '#ffe5d9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faCalendarDays} />}
          >
            <h3 className="vertical-timeline-element-title">Request</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
            Browse our site for great discounts on top furniture brands. Every piece is inspected, cleaned, and ready for delivery.          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faStore} />}
          >
            <h3 className="vertical-timeline-element-title">List & Sell</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Using our secure checkout, purchase and select a delivery date. We’ll get in touch to confirm your availability and email an appointment window 2 days before delivery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faPiggyBank} />}
          >
            <h3 className="vertical-timeline-element-title">Get Paid</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Our white-glove team will deliver and setup your furniture. All you have to do is sit back and relax. And you can rest easy knowing your purchase helped create a better planet.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
})

export default HowItWorks;
