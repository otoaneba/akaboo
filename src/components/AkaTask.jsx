import React from "react";
import PropTypes from "prop-types";

const AkaTask = React.forwardRef((props, ref) => {
	return (
		<div className="akatask-section" ref={ref} id={props.id}>
			<h2>Free AI Tool for Parents</h2>
			<div className="akatask-content">
				<h1>akaTask: AI-Powered Activity Generator</h1>
				<p>
					Streamline your parenting journey with akaTask. Generate
					personalized activities and schedules that adapt to your
					family's unique needs. Perfect for busy parents looking to
					maintain structure while having fun with their kids.
				</p>
				<button
					onClick={() => {
						window.open(
							"https://apps.apple.com/az/app/akatask/id6566193664?platform=iphone",
							"_blank"
						);
					}}
					className="download-button"
				>
					Download Free App
				</button>
				<div className="app-screenshots">
					<img
						src="/landing1.jpg"
						width="300"
						alt="akaTask app screenshot 1"
					/>
					<img
						src="/landing2.jpg"
						width="300"
						alt="akaTask app screenshot 2"
					/>
				</div>
			</div>
		</div>
	);
});

AkaTask.displayName = "AkaTask";

AkaTask.propTypes = {
	id: PropTypes.string,
};

export default AkaTask;
