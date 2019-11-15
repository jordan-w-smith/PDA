require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

  def test_can_check_for_ace
    game = CardGame.new()
    card = Card.new('Spades', 1)
    assert_equal(true, game.check_for_ace(card))
  end

  def test_can_get_highest_card
    game = CardGame.new()
    card1 = Card.new("Hearts", 1)
    card2 = Card.new("Clubs", 10)
    assert_equal(card2, game.highest_card(card1, card2))
  end

  def test_can_get_cards_total
    game = CardGame.new()
    card1 = Card.new("Clubs", 5)
    card2 = Card.new("Spades", 10)
    card3 = Card.new("Hearts", 5)
    cards = [card1, card2, card3]
    assert_equal("You have a total of 20", game.cards_total(cards))
  end

end
