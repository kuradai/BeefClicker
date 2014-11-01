class AddSettingColumn < ActiveRecord::Migration
  def change
    add_column :settings, :price, :integer
  end
end
