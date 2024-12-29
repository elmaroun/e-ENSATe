<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Reclamation;

class ReclamationSuccess extends Mailable
{
    use Queueable, SerializesModels;

    public $reclamation;

    /**
     * Create a new message instance.
     */
    public function __construct(Reclamation $reclamation)
    {
        $this->reclamation = $reclamation;  // Assign the passed reclamation to the public property
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Réclamation Soumise avec Succès - ' . $this->reclamation->id,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.successRec', // Correct path to the Blade file
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

}
