<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage as FacadesStorage;
use Storage;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $alldir = collect(Storage::allFiles('.'));
        // $alldir = Storage::allFiles('.');
        $MITotalData = json_decode(Storage::get('MITotalData.json'));
        $midataerrortable = json_decode(Storage::get('midataerrortable.json'));
        $midatalinechart = json_decode(Storage::get('midatalinechart.json'));
        $midatabarchart = json_decode(Storage::get('midatabarchart.json'));
        $midatatreemap = json_decode(Storage::get('midatatreemap.json'));
        // return $alldir->filter(function ($items) {
        //     return $items = substr($items, 0, 1);
        // });

        return [
            "MITotalData" => $MITotalData,
            "midataerrortable" => $midataerrortable,
            "midatalinechart" => $midatalinechart,
            "midatabarchart" => $midatabarchart,
            "midatatreemap" => $midatatreemap
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
