### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame
#missing initialise

  def checkforAce(card)
  # incorrectly named function, should be check_for_ace
    if card.value = 1
    #should be "==" to check if equal
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # misspelling when creating function, should be 'def', should also be a comma separating parameters.
  if card1.value > card2.value
    return card
  else
    return card2
  end
end
end
#above end should be after the final instance method below when class ends
#indentation off

def self.cards_total(cards)
  #self means is called on class rather than object
  total
  #total not assigned initial value
  for card in cards
    total += card.value
    return "You have a total of" + total
    #return statement inside of for loop, should be after. attempting to add string to integer.
  end
end
```
