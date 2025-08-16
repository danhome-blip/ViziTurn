import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

export default function CategorySelector({ user }) {
  const [categories, setCategories] = useState({
    muzica: false,
    literatura: false,
    food: false,
    arta: false,
    educatie: false,
    stiri: false,
    evenimente: false,
  });

  const allCategories = Object.keys(categories);

  // Încarcă preferințele salvate
  useEffect(() => {
    const loadPreferences = async () => {
      const { data, error } = await supabase
        .from('user_preferences')
        .select('categories')
        .eq('user_id', user.id)
        .single();

      if (data) {
        const saved = data.categories;
        setCategories({
          muzica: saved.includes('muzica'),
          literatura: saved.includes('literatura'),
          food: saved.includes('food'),
          arta: saved.includes('arta'),
          educatie: saved.includes('educatie'),
          stiri: saved.includes('stiri'),
          evenimente: saved.includes('evenimente'),
        });
      }
    };

    if (user) {
      loadPreferences();
    }
  }, [user]);

  // Salvează la fiecare schimbare
  const handleChange = async (category) => {
    const newCategories = {
      ...categories,
      [category]: !categories[category],
    };
    setCategories(newCategories);

    const selected = Object.keys(newCategories).filter(key => newCategories[key]);

    const { error } = await supabase
      .from('user_preferences')
      .upsert(
        {
          user_id: user.id,
          categories: selected,
        },
        { onConflict: 'user_id' }
      );

    if (error) {
      console.error('Eroare la salvarea preferințelor:', error.message);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
      {allCategories.map(cat => (
        <label key={cat} className="flex items-center space-x-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            checked={categories[cat]}
            onChange={() => handleChange(cat)}
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="capitalize">{cat}</span>
        </label>
      ))}
    </div>
  );
}
