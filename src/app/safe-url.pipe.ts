import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const ALLOWED_HOSTS = ['www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com'];

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl | null {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== 'https:' || !ALLOWED_HOSTS.includes(parsed.hostname)) {
        console.error(`URL vidéo refusée (hôte non autorisé) : ${url}`);
        return null;
      }
    } catch {
      console.error(`URL vidéo invalide : ${url}`);
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
