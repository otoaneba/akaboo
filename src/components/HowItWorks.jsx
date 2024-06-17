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
        <VerticalTimeline layout='1-column-right' className="vertical-timeline">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
          
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />}
          >
            <h3 className="vertical-timeline-element-title">Browse</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
            Explore our curated selection of pre-owned baby gear. Use filters to find exactly what you need, from strollers to car seats and more. </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faCartShopping} />}
          >
            <h3 className="vertical-timeline-element-title">Order</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Select your desired items and place your order with confidence, knowing each product has been quality-checked and meets safety standards.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faFaceLaughBeam} />}
          >
            <h3 className="vertical-timeline-element-title">Enjoy</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Receive your purchase at your doorstep and enjoy the benefits of sustainable, affordable, and high-quality baby gear for your little ones.            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div>
        <h2 className="tutorial--title">Selling with akaboo</h2>
        <VerticalTimeline layout='1-column-left'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: '#ffe5d9', color: '#000' }}
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faCalendarDays} />}
          >
            <h3 className="vertical-timeline-element-title">Request</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
            Sign up and request to list your pre-owned baby gear. Choose between our self-service or full-service options for your convenience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faStore} />}
          >
            <h3 className="vertical-timeline-element-title">List & Sell</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Upload photos, set your price, and provide a detailed description. For full-service, we handle the listing for you, including safety checks and quality assurance.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#a2d2ff', color: '#fff' }}
            icon={<FontAwesomeIcon className="icon" icon={faPiggyBank} />}
          >
            <h3 className="vertical-timeline-element-title">Get Paid</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
            Once your item sells, ship it directly to the buyer or let us handle the logistics. Receive your payment securely in your account.            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
})

export default HowItWorks;
