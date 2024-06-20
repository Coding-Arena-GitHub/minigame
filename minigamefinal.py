import random

player_score = 0
computer_score = 0

def get_computer_choice():
    return random.choice(['rock', 'paper', 'scissors'])

def get_user_choice():
    choice = input("Enter rock, paper, or scissors: ")
    if choice not in ['rock', 'paper', 'scissors']:
        print("Invalid choice. Please choose rock, paper, or scissors.")
        return get_user_choice()
    return choice

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (user_choice == "rock" and computer_choice == "scissors") or \
         (user_choice == "paper" and computer_choice == "rock") or \
         (user_choice == "scissors" and computer_choice == "paper"):
        return "You win!"
    else:
        return "Computer wins!"

def play_game():
    global player_score, computer_score

    user_choice = get_user_choice()
    computer_choice = get_computer_choice()
    print(f"Computer chose {computer_choice}")
    result = determine_winner(user_choice, computer_choice)
    print(result)

    if result == "You win!":
        player_score += 1
    elif result == "Computer wins!":
        computer_score += 1

    play_again = input("Do you want to play again? (yes/no): ")
    if play_again == "yes":
        play_game()
    else:
        print(f"Final Scores - Player: {player_score}, Computer: {computer_score}")

if __name__ == "__main__":
    play_game()