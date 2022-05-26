<?php

namespace App\Http\Controllers\Api;

use Faker;
use App\Models\MailBox;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MailBoxSettingsController extends Controller
{
    private $faker;

    public function __construct()
    {
        $this->middleware(['auth']);
        $this->faker = Faker\Factory::create()->unique();
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $user = $request->user();
        return $user->mailBoxes;
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
        $name = $request->name;
        $username = $this->faker->text(32);
        $password = $this->faker->password();

        return MailBox::create([
            'protocol' => 'smtp',
            'address' => '',
            'port' => 8888,
            'name' => $name,
            'username' => $username,
            'password' => $password,
            'user_id' => $request->user()->id
        ]);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $mailbox = MailBox::find($id);
        $username = $this->faker->text(32);
        $password = $this->faker->password();
        $mailbox->update([
            'username' => $username,
            'password' => $password
        ]);
        return $mailbox;
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
        return MailBox::destroy($id);

    }
}
