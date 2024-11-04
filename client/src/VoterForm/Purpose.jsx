function Purpose({ why, onWhyChange }) {
	// TODO: Refactor
	const handleKeyDown = (e) => {
		if (e.key == "Enter") {
			e.preventDefault();
			e.target.click();
		}
	};

	const labelClass = "font-medium text-gray-900 cursor-pointer";

	return (
		<div className="border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20 mx-auto">
			<div className="w-full mt-10">
				<p className="mt-1 text-md leading-6 text-gray-600">
					Check off the most applicable reason why you're completing this application
				</p>
				<fieldset>
					<div className="mt-6 space-y-6">
						<div className="relative flex gap-x-3">
							<div className="flex h-6 items-center">
								<input
									id="new-application"
									name="new-application"
									type="checkbox"
									checked={newApplicationChecked}
									className={[
										"custom-checkbox",
										// isNewApplicationDisabled ? "cursor-not-allowed" : "cursor-pointer",
									]}
									onChange={(e) => {
										const value = e.target.checked;
										onNewApplicationCheckedChange(value);
									}}
									// disabled={isNewApplicationDisabled}
									onKeyDown={handleKeyDown}
								/>
							</div>
							<div className="text-sm leading-6">
								<label
									htmlFor="new-application"
									className={labelClass}
									style={{
										color: !newApplicationChecked ? "grey" : "black",
										cursor: !newApplicationChecked ? "not-allowed" : "pointer",
									}}
								>
									New Application
								</label>
							</div>
						</div>
					</div>
				</fieldset>

				<fieldset>
					<div className="mt-6 space-y-6">
						<div className="relative flex gap-x-3">
							<div className="flex h-6 items-center">
								<input
									id="change-address"
									name="change-address"
									checked={changeAddressChecked}
									type="checkbox"
									className={[
										"custom-checkbox",
										changeAddressChecked ? "cursor-pointer" : "cursor-not-allowed",
									]}
									onChange={(e) => {
										const value = e.target.checked;
										onChangeAddressCheckedChange(value);
									}}
									disabled={!isChangeAddressChecked}
									style={{ cursor: !isChangeAddressChecked ? "not-allowed" : "pointer" }}
									onKeyDown={handleKeyDown}
								/>
							</div>
							<div className="text-sm leading-6">
								<label
									htmlFor="change-address"
									className={labelClass}
									// TODO: Refactor
									style={{
										color: !isChangeAddressChecked ? "grey" : "black",
										cursor: !isChangeAddressChecked ? "not-allowed" : "pointer",
									}}
								>
									Change of Address, Name, or Other Information
								</label>
							</div>
						</div>
					</div>
				</fieldset>
				{/*
				<fieldset>
					<div className="mt-6 space-y-6">
						<div className="relative flex gap-x-3">
							<div className="flex h-6 items-center">
								<input
									id="replacement-card"
									name="replacement-card"
									type="checkbox"
									checked={isReplacementCardChecked}
									className="custom-checkbox"
									disabled={!isReplacementCardChecked}
									onChange={_onWhyChange}
									// TODO: Refactor
									style={{ cursor: !isReplacementCardChecked ? "not-allowed" : "pointer" }}
									onKeyDown={handleKeyDown}
								/>
							</div>
							<div className="text-sm leading-6">
								<label
									htmlFor="replacement-card"
									className={labelClass}
									style={{
										color: !isReplacementCardChecked ? "grey" : "black",
										cursor: !isReplacementCardChecked ? "not-allowed" : "pointer",
									}}
								>
									Request for a replacement card
								</label>
							</div>
						</div>
					</div>
				</fieldset>

				<fieldset>
					<div className="mt-24 space-y-6">
						<div className="relative flex gap-x-3">
							<div className="flex h-6 items-center">
								<input
									id="election_worker"
									name="election_worker"
									type="checkbox"
									checked={election_worker === "yes"}
									className="custom-checkbox cursor-pointer"
									onChange={(e) => onElectionWorkerChange(e.target.value)}
									onKeyDown={handleKeyDown}
								/>
							</div>
							<div className="text-sm leading-6">
								<label htmlFor="election_worker" className="font-bold text-gray-900 cursor-pointer">
									Check here if you would like to volunteer to be an election worker
								</label>
							</div>
						</div>
					</div>
				</fieldset> */}
			</div>
		</div>
	);
}

export default Purpose;
