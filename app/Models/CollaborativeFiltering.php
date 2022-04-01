<?php

namespace App\Models;

abstract class CollaborativeFiltering{

	private $acceptLimit = 0.5;

	abstract public function filter();

}