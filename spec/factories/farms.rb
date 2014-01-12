# encoding: UTF-8

FactoryGirl.define do
  factory :farm do
    name "Testfarm"
    address "Fehrbelliner Str. 45a"
    city "Neuruppin"
    latitude 52.500556
    longitude 13.398889
    is_established true
    description "The description of the place."
    contact_name "Anna Platz"
    contact_function "coordinator"
    contact_email "anna@teikei.de"
    contact_phone "+49 30 1234567"
    contact_url "http://example.com"
    founded_at_year 2009
    founded_at_month 12
    maximum_members 10
    vegetable_products %w{cereals spices mushrooms bread_and_pastries}
    animal_products %w{dairy milk fish honey}
    beverages %w{beer wine}
    additional_product_information 'Bei uns gibt es einmalige Produkte.'
    acts_ecological true
    economical_behavior "Alles wird biologisch angebaut."
    participation "Garten umgraben ist angesagt"
    image
    user

    factory :orphan_farm do
      after(:create) do |farm|
        user = create(:user).reload
        farm.user = user
        user.destroy
        farm.save
      end
    end

  end
end
