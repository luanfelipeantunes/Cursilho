<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $filePath = storage_path('app/output.json');
        $jsonContent = file_get_contents($filePath);

        $data = json_decode($jsonContent, true);

        foreach ($data as $d) {
            Event::create([
                'name' => $d['name'],
                'start_date' => $d['start_date'],
                'end_date' => $d['end_date'],
                'locale' => $d['locale'],
                'description' => $d['description']
            ]);
        }
    }
}
