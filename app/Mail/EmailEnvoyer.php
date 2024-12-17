<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;

class EmailEnvoyer extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

    public $data;

    public function __construct($data)
    {
        $this->data=$data;

    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('mohamedsadki2003@gmail.com'),
            subject: $this->data['subject'],
        );
    }

    /**
     * Get the message content definition.
     */
    
    
     /*public function content(): Content
    {
        return new Content(
            view: 'mail.test',
        );
    }*/


    public function build()
    {
        return $this->view('mail.test')
                    ->subject('Reclamation en cours de traitement')
                    ->with([
                        'subject' => $this->data['subject'],
                    ]);
    }


    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */


    public function attachments(): array
    {
        $filePath = storage_path($this->data['path']); 

    if (!file_exists($filePath)) {

        throw new \Exception("File not found at path: {$filePath}");
    }

    return [
        Attachment::fromPath($filePath),
    ];
    }


}
