<?php

namespace Database\Factories;

use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    protected $model = Message::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //
            'subject' => $this->faker->sentence(5),
            'header' => 'from: ' . $this->faker->safeEmail(),
            'from' => $this->faker->safeEmail(),
            'to' => $this->faker->safeEmail(),
            'body' => $this->faker->sentence(20),
            'slug' => $this->faker->sentence(1),
            'value' => $this->faker->numberBetween(0, 999)
        ];
    }
}
