<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\HobbiesRepository")
 */
class Hobbies
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $hob_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hob_name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hob_img;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hob_url;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hob_class;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    public function getId()
    {
        return $this->id;
    }

    public function getHobName(): ?string
    {
        return $this->hob_name;
    }

    public function setHobName(string $hob_name): self
    {
        $this->hob_name = $hob_name;

        return $this;
    }

    public function getHobImg(): ?string
    {
        return $this->hob_img;
    }

    public function setHobImg(string $hob_img): self
    {
        $this->hob_img = $hob_img;

        return $this;
    }

    public function getHobUrl(): ?string
    {
        return $this->hob_url;
    }

    public function setHobUrl(string $hob_url): self
    {
        $this->hob_url = $hob_url;

        return $this;
    }

    public function getHobClass(): ?string
    {
        return $this->hob_class;
    }

    public function setHobClass(string $hob_class): self
    {
        $this->hob_class = $hob_class;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

}
