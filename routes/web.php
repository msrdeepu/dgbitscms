<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/admin-pages', function () {
    return Inertia ::render('Managepages');
});

Route::get('/admin-widgets', function () {
    return Inertia ::render('Managewidgets');
});

Route::get('/admin-categories', function () {
    return Inertia ::render('Managecategories');
});

Route::get('/admin-countries', function () {
    return Inertia ::render('Managecountries');
});


Route::get('/admin-states', function () {
    return Inertia ::render('Managestates');
});


Route::get('/admin-districts', function () {
    return Inertia ::render('Managedistricts');
});

Route::get('/admin-page-create', function () {
    return Inertia ::render('Createpage');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
