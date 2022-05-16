<?php

test('example', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});
