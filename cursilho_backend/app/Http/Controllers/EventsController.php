<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventsController extends Controller
{

    //Listando Eventos
    public function index(Request $request)
    {
        $perPage = $request -> input('perPage', 10);
        $events = Event::paginate($perPage);
        return response()->json($events);
    }

    public function create()
    {
        //
    }


    //Salvando Evento no banco de dados
    public function store(Request $request)
    {
        $event = new Event();

        $event->name = $request->input('name');
        $event->start_date = $request->input('start_date');
        $event->end_date = $request->input('end_date');
        $event->locale = $request->input('locale');
        $event->description = $request->input('description');

        $event -> save();

        return json_encode($event);
    }


    //Mostrando evento específico
    public function show($id)
    {
        $event = Event::find($id);

        return response()->json($event);
    }


    //Informações do evento específico
    public function edit($id)
    {
        $event = Event::find($id);

        return response()->json($event);
    }


    //Atualizando Evento
    public function update(Request $request, $id)
    {
        $event = Event::find($id);

        $event -> name = $request->input('name');
        $event -> start_date = $request->input('start_date');
        $event -> end_date = $request->input('end_date');
        $event -> locale = $request->input('locale');
        $event -> description = $request->input('description');

        $event -> save();
    }


    //Deletando Evento
    public function destroy($id)
    {
        $event = Event::find($id);
        $event->delete();
    }
}
