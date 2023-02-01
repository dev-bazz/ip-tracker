import backgroundImage from "../images/pattern-bg.png";
import "./ip.scss";

function IPTracker({ compRef, state, send }) {
	const { context } = state;
	console.log(state.value, "Current State");
	return (
		<div className="ipTracker">
			<div className="ip-container">
				<img
					src={backgroundImage}
					alt="Pattern"
				/>
				<form
					className="input-area"
					onSubmit={(e) => e.preventDefault()}>
					<div className="input">
						<input
							ref={compRef}
							type="text"
							placeholder={context.placeholder}
							required
						/>
						<button
							onClick={(e) => {
								const {
										current: { value },
									} = compRef,
									val = value;
								send({
									type: "Search",
									val,
									msg: `🙃 This is your IP Address `,
									defaultPlacerHolder: `Place An IP Address here`,
								});
							}}>
							<svg
								className="arrow"
								xmlns="http://www.w3.org/2000/svg"
								width="0.68rem"
								height="0.8rem">
								<path
									fill="none"
									stroke="#FFF"
									strokeWidth="0.18em"
									d="M2 1l6 6-6 6"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>
			<div className="stats">
				<div className="stats-content">
					<div className="stats-items">
						<div className="item">
							<h4>IP Address</h4>
							<p>{context.data.query}</p>
						</div>
						<div className="item">
							<h4>Location</h4>
							<p>{context.data.country}</p>
						</div>
						<div className="item">
							<h4>Time Zone</h4>
							<p>{context.data.timezone}</p>
						</div>
						<div className="item">
							<h4>ISP</h4>
							<p>{context.data.isp}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { IPTracker };
