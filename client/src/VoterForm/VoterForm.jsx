import Profile from "./Profile";
import Address from "./Address";
import Personal from "./Personal";
import Purpose from "./Purpose";
import Mailing from "./Mailing";

export default function VoterForm({ value, onValueChange, onReviewClick }) {
	// const handleNumberKeyDown = (e) => {
	// 	const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
	// 	const isDigit = /^\d$/.test(e.key);
	// 	if (!allowedKeys.includes(e.key) && !isDigit) {
	// 		e.preventDefault();
	// 	}
	// };

	return (
		<form
			className="m-2 p-4 h-auto bg-white rounded shadow-xl"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<Purpose
				newApplicationChecked={value.newApplicationChecked}
				onNewApplicationCheckedChange={(checked) =>
					onValueChange((formValue) => ({
						...formValue,
						newApplicationChecked: checked,
					}))
				}
				changeAddressChecked={value.changeAddressChecked}
				onChangeAddressCheckedChange={(checked) =>
					onValueChange((formValue) => ({
						...formValue,
						changeAddressChecked: checked,
					}))
				}
				// election_worker={value.election_worker}
				// onElectionWorkerChange={(election_worker) => {
				// 	onValueChange((value) => ({
				// 		...value,
				// 		election_worker,
				// 	}));
				// }}
			/>
			{/* <Profile
				formData={value}
				handleChange={handleInputChange}
				checkboxHandler={checkboxHandler}
				isDisabled={isDisabled}
				handleKeyDown={handleKeyDown}
				gender={value.gender}
				onGenderChange={(gender) =>
					onValueChange((value) => ({
						...value,
						gender,
					}))
				}
			/>
			<Address
				formData={value}
				setFormData={onValueChange}
				handleChange={handleInputChange}
				checkboxHandler={checkboxHandler}
				handleKeyDown={handleKeyDown}
				isDisabled={isDisabled}
				handleNumberKeyDown={handleNumberKeyDown}
			/>
			{value.seconday_address != null && (
				<Mailing
					formData={value}
					handleChange={handleInputChange}
					checkboxHandler={checkboxHandler}
					handleNumberKeyDown={handleNumberKeyDown}
				/>
			)}
			<Personal
				formData={value}
				setFormData={onValueChange}
				handleChange={handleInputChange}
				checkboxHandler={checkboxHandler}
				isCitizenDisabled={isCitizenDisabled}
				setCitizenCheckbox={setCitizenCheckbox}
				citizenCheckbox={citizenCheckbox}
				setNoIdCheckbox={setNoIdCheckbox}
				noIdCheckbox={noIdCheckbox}
				handleKeyDown={handleKeyDown}
				handleNumberKeyDown={handleNumberKeyDown}
			/> */}
			<div className="pr-24">
				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						type="button"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						onClick={onReviewClick}
					>
						Review Options
					</button>
				</div>
			</div>
		</form>
	);
}
