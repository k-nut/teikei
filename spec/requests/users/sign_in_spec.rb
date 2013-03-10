require 'spec_helper'

describe 'Sign in' do

  before(:each) do
    sign_out
  end

  it "does not sign in an unknown user" do
    visitor = build(:user)
    sign_in visitor
    expect(page).to have_content I18n.t('devise.failure.not_found_in_database')
    expect_user_not_to_be_signed_in
  end

  it 'signs in a user with correct credentials' do
    create(:user)
    visitor = build(:user)
    sign_in visitor
    expect(page).to have_content I18n.t('devise.sessions.signed_in')
    visit '/'
    expect_user_to_be_signed_in
  end

  it "does not sign in a user with wrong email" do
    create(:user)
    visitor = build(:user, email: 'wrong@example.com')
    sign_in visitor
    expect(page).to have_content I18n.t('devise.failure.not_found_in_database')
    expect_user_not_to_be_signed_in
  end

  it "does not sign in a user with wrong password" do
    create(:user)
    visitor = build(:user, password: 'wrongpass')
    sign_in visitor
    expect(page).to have_content I18n.t('devise.failure.invalid')
    expect_user_not_to_be_signed_in
  end

end
