import ipdb
from prompts import prompts, mailing_address_prompts

space = ' '

def exit_program():
    print(f"\n{space*10}Your changes are not saved. Goodbye.\n")
    exit()


def edit_entries(user_info):
    while True:
        # for prompt in prompts:
        #     print(f"{prompts.index(prompt)+1}{space*10}{prompt}")

        print(f"\n{space*10}Please review your entries:\n")
        ipdb.set_trace()
        if user_info:
            for key, value in user_info.items():    
                print(f"{space*10}{key}. {prompts[key-1]}: {value}")
        else:
            for prompt in prompts:
                print(f'{space*10}{prompts.index(prompt)+1}. {prompt}')


        edit = input(f"\n{space*10}Would you like to edit any of your entries? (Y or N): ").strip().upper()
        if edit == 'Y':
            key_to_edit = input(f"{space*10}\nWhich entry would you like to edit? (Enter the associated number): ")
            if key_to_edit in user_info:
                new_value = input(f"{space*10}Enter the new value for {key_to_edit}: ")
                user_info[key_to_edit] = new_value
            else:
                print(f"{space*10}Invalid key. Please enter a valid key.")
        else:
            break
        
        print(user_info)


def get_mailing_address():
    mailing_address_info = {}
    
    for prompt in mailing_address_prompts:
        while True:
            response = input(f'{prompts.index(prompt)+1}{prompt}')
            if response == 'q':
                exit_program()
                
            if response.strip():
                mailing_address_info[prompts.index(prompt)+1] = input(f"{prompt}")
                break
            # else:
            #     print("This field cannot be left blank. Please enter a valid response.")

    return mailing_address_info


def menu():
    print(f"\n{space*10}Hi -- Welcome.\n")

    user_info = {}

    for prompt in prompts:
        while True:
            response = input(f'{space*10}{prompts.index(prompt)+1}. {prompt}')
            if response == 'q':
                exit_program()
            
            if response.strip():
                user_info[prompts.index(prompt)+1] = response
                break
            if not response:
                break
            # else:
            #     print("This field cannot be left blank. Please enter a valid response.")

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
                
    user_info = edit_entries(user_info)

    return user_info


if __name__ == "__main__":
    while True:
        user_info = menu()
