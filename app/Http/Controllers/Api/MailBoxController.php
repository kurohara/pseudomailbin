<?php

namespace App\Http\Controllers\Api;

use App\Models\Message;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MailBoxController extends Controller
{
    //
    public function index(Request $request)
    {
        return $request->user()->mailBoxes;
    }

    public function list(Request $request, $id)
    {
        $mbox = $request->user()->mailBox($id);
        if ($mbox) {
            return $mbox->messages;
        } else {
            return [];
        }
    }

    public function show(Request $request, $id, $message)
    {
        $mbox = $request->user()->mailBox($id);
        if ($mbox) {
            return $mbox->message($message);
        } else {
            return [];
        }
    }
    
    public function destroy(Request $reuest, $id, $message)
    {
        return Message::destroy($message);
    }
}
