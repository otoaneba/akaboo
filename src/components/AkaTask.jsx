import React from "react";
import PropTypes from "prop-types";

const AkaTask = React.forwardRef((props, ref) => {
	return (
		<div className="akatask-section" ref={ref} id={props.id}>
			<div className="akatask-content">
				<div className="akatask-grid">
					<div className="akatask-text">
						<h2>Try Our Free Activity Planner</h2>
						<p>
							AkaTask is designed to make parenting easier by
							providing personalized activity suggestions for your
							kids. Download it today and discover endless fun and
							learning opportunities!
						</p>
						<button
							onClick={() => {
								window.open(
									"https://apps.apple.com/az/app/akatask/id6566193664",
									"_blank"
								);
							}}
							className="cta-button"
						>
							📲 Download AkaTask now
						</button>
					</div>
					<div className="app-screenshots">
						<img
							src="/landing1.jpg"
							alt="AkaTask app screenshot 1"
							className="app-screenshot"
						/>
						<img
							src="/landing2.jpg"
							alt="AkaTask app screenshot 2"
							className="app-screenshot"
						/>
					</div>
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
