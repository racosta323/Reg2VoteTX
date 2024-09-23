import ipdb

def exit_program():
    print("\nYour changes are not saved. Goodbye.\n")
    exit()


def edit_entries(user_info):
    while True:
        print("\nPlease review your entries:")
        for key, value in user_info.items():
            print(f"{key.capitalize()}: {value}")

        edit = input("\nWould you like to edit any of your entries? (Y/N): ").strip().upper()
        if edit == 'Y':
            key_to_edit = input("Which entry would you like to edit? (Enter the key): ").strip().lower()
            if key_to_edit in user_info:
                new_value = input(f"Enter the new value for {key_to_edit}: ")
                user_info[key_to_edit] = new_value
            else:
                print("Invalid key. Please enter a valid key.")
        else:
            break
        
        print(user_info)

def get_mailing_address():

    mailing_address_prompts = [
        "What is your mailing address (if different than your residence address)? ",
        "Residence address city? ",
        "Residence address state? ",
        "Residence address zip code? ",
    ]

    mailing_address_info = {}
    
    
    for prompt in mailing_address_prompts:
        while True:
            response = input(f'{prompt}')
            if response == 'q':
                exit_program()
                
            if response.strip():
                mailing_address_info[prompt.split()[0].lower()] = input(f"{prompt}")
                break
            else:
                print("This field cannot be left blank. Please enter a valid response.")

    return mailing_address_info


def menu():
    print("\nHi -- Welcome.\n")

    prompts = [
        "What is your first name? ",
        "What is your last name? ",
        "What is your middle name, if any? ",
        "Do you have a former name? (e.g. a maiden name) ",
        "What is your street address IN TEXAS, including any apartment numbers? If none, describe where you live. ",
        "What city (in TX)? ",
        "What county (in TX)? ",
        "Do you have a mailing address different than the one described (Y/N)? ",
    ]

    user_info = {}

    for prompt in prompts:
        ipdb.set_trace()
        while True:
            response = input(f'{prompt}')
            if response == 'q':
                exit_program()
            
            if response.strip():
                user_info[prompt.split()[0].lower()] = response
                break
            else:
                print("This field cannot be left blank. Please enter a valid response.")

            # secondary mailing address
            if (
                prompt.startswith(
                    "Do you have a mailing address different than the one described (Y/N)? "
                )
                and user_info[
                    "do you have a mailing address different than the one described (y/n)? "
                ]
                == "Y"
            ):
                mailing_address_info = get_mailing_address()
                user_info.update(mailing_address_info)
                ipdb.set_trace()
                
            user_info = edit_entries(user_info)

    return user_info


if __name__ == "__main__":
    while True:
        user_info = menu()
