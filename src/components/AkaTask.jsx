import React from "react";
import PropTypes from "prop-types";

const AkaTask = React.forwardRef((props, ref) => {
	return (
		<div className="akatask-section" ref={ref} id={props.id}>
			<h2>akaTask App</h2>
			<div style={{ padding: "20px", background: "#FDFBF9" }}>
				<h1>AI Task Generator for Parents! </h1>
				<p style={{ paddingLeft: "15rem", paddingRight: "15rem" }}>
					akaTask lets you stay organized and productive by helping
					you plan your tasks. Simply provide a few keywords—like
					&ldquo;exercise,&rdquo; &ldquo;study,&rdquo;
					&ldquo;household,&rdquo; or a combination of all three —and
					let the app&apos;s advanced AI generate tasks based on your
					schedule preferences, whether it&apos;s daily, weekly, or
					monthly..
				</p>
				<button
					onClick={() => {
						window.open(
							"https://apps.apple.com/az/app/akatask/id6566193664?platform=iphone",
							"_blank"
						);
					}}
					style={{
						cursor: "pointer",
						paddingTop: "1rem",
						paddingBottom: "1rem",
						paddingRight: "3rem",
						paddingLeft: "3rem",
						fontFamily: "Montserrat",
						backgroundColor: "#CA2500",
						border: "none",
						borderRadius: "2rem",
						boxShadow: "0.15rem 0.15rem 0.15rem lightgray",
					}}
				>
					Try for free
				</button>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "1rem",
						padding: "1rem",
					}}
				>
					<img src="/landing1.jpg" width="300"></img>
					<img src="/landing2.jpg" width="300"></img>
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
