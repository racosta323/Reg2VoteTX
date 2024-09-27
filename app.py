import ipdb
from prompts import prompts
from main import Person
from main import PdfDoc

space = ' '
ast = '*'

def exit_program():
    print(f"\n{space*10}Your changes are not saved. Goodbye.\n")
    exit()

def preview_changes(user_info):
    for i, (prompt, value) in enumerate(prompts.items(), start = 1):
        key = prompts[prompt]
        print(f"{space*10}{i}. {prompt} {user_info.get(key)}")
        
def edit_entries(user_info):
    while True:
        print(f"\n{space*10}{ast*50}\n")
        print(f"{space*10}PLEASE REVIEW YOUR ENTRIES:\n")
        
        preview_changes(user_info)
                
        print(f"\n{space*10}{ast*50}\n")
        edit = input(f"\n{space*10}Would you like to edit any of your entries? (Y or N): ").strip().upper()
        if edit.lower() == 'q' or edit.lower() == 'exit':
                exit_program()
        if edit == 'Y':
            try:
                entry_number = int(input(f"\n{space*10}Which entry would you like to edit? \n{space*10}(Enter the number): ").strip())
                if 1 <= entry_number <= len(user_info):
                    actual_key = list(user_info.keys())[entry_number-1]
                    new_value = input(f"\n{space*10}Enter the new value for '{actual_key}': ")
                    user_info[actual_key] = new_value
            except ValueError:
                print("Invalid input. Please enter a valid number")
        else:
            print(f'\n{space*10}Writing PDF.....')
            print(f'\n{space*10}.....')
            print(f'\n{space*10}.....')
            try:
                write_pdf(user_info)
                print(f'\n{space*10}PDF generated!!')
                print(f'\n{space*10}________________\n\n')
                return
            except Exception as e:
                print(f"\n{space*10}{e}")
        
def write_pdf(user_info):
    person = Person(**user_info)
    pdf_doc = PdfDoc()
    pdf_doc.write_pdf(person)
            
def menu():
    menu = """
        Hi! Welcome.
        Submit 'q' or 'exit' at any time to exit.
        
        Skip an answer by pressing enter. You will be given a chance to review and edit all entries after submitting responses. 
    """
    print(f"\n{space*10}{menu}")
    print(f"{space*10}{ast*50}\n")
    user_info = {}
    
    for prompt, value in prompts.items():
        while True:
            response = input(f'{space*10}{prompt}')
            # exit
            if response.lower() == 'q' or response.lower() == 'exit':
                exit_program()
            
            user_info[prompts[prompt]] = response
            break
                
    user_info = edit_entries(user_info)

    return user_info

if __name__ == "__main__":
    while True:
        user_info = menu()
